import { useRef, useState } from "react";
import Layout from "../components/Layout";
import "../styles/season0Map.css";

const palette = ["#ffb400","#37b7ff","#ff5d73","#7ce38b","#bb86fc","#ff8a3d","#ffdd57","#43d9ad"];

export default function Season0Map(){
  const mapRef = useRef(null);
  const [zoom,setZoom] = useState(1);
  const [offset,setOffset] = useState({x:0,y:0});
  const [drag,setDrag] = useState(null);
  const [alliances,setAlliances] = useState([{tag:"KSHN",color:palette[0]}]);
  const [active,setActive] = useState("KSHN");
  const [marks,setMarks] = useState([]);

  const activeAlliance = alliances.find(a=>a.tag===active);

  function addAlliance(){
    const value = prompt("İttifak etiketi:");
    if(!value?.trim()) return;
    const tag = value.trim().toUpperCase().slice(0,6);
    if(alliances.some(a=>a.tag===tag)) return setActive(tag);
    const item = {tag,color:palette[alliances.length%palette.length]};
    setAlliances(p=>[...p,item]);
    setActive(tag);
  }

  function placeMark(e){
    if(drag?.moved || !activeAlliance) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = ((e.clientX-rect.left)/rect.width)*100;
    const y = ((e.clientY-rect.top)/rect.height)*100;
    setMarks(p=>[...p,{id:crypto.randomUUID(),x,y,tag:activeAlliance.tag,color:activeAlliance.color}]);
  }

  function save(){
    const blob = new Blob([JSON.stringify({version:2,map:"season-0",alliances,marks},null,2)],{type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url;a.download="sezon-0-harita-plani.json";a.click();
    URL.revokeObjectURL(url);
  }

  function load(e){
    const file=e.target.files?.[0]; if(!file) return;
    const reader=new FileReader();
    reader.onload=()=>{
      try{
        const d=JSON.parse(reader.result);
        if(d.map!=="season-0") throw new Error();
        setAlliances(d.alliances||[]);
        setMarks(d.marks||[]);
        setActive(d.alliances?.[0]?.tag||"");
      }catch{ alert("Geçerli Sezon 0 plan dosyası seç."); }
    };
    reader.readAsText(file); e.target.value="";
  }

  return <Layout>
    <section className="realMapPage">
      <aside className="plannerSide">
        <span className="eyebrow">İNTERAKTİF HARİTA</span>
        <h1>Sezon 0</h1>
        <p>İttifakı seç. Haritadaki bölgeye tıklayarak plan işareti bırak.</p>

        <div className="plannerPanel">
          <div className="plannerTitle"><b>İttifaklar</b><button onClick={addAlliance}>+ Ekle</button></div>
          <div className="plannerAlliances">
            {alliances.map(a=><button key={a.tag} className={active===a.tag?"active":""} onClick={()=>setActive(a.tag)}>
              <i style={{background:a.color}}/>[{a.tag}]
            </button>)}
          </div>
        </div>

        <div className="plannerPanel">
          <b>Plan</b>
          <span>{marks.length} işaret eklendi</span>
          <button className="dangerButton" onClick={()=>setMarks([])}>Tüm İşaretleri Temizle</button>
        </div>

        <div className="plannerActions">
          <button onClick={save}>Planı Kaydet</button>
          <label>Plan Yükle<input type="file" accept=".json" onChange={load}/></label>
        </div>
      </aside>

      <div className="realMapViewport"
        onMouseDown={e=>setDrag({x:e.clientX,y:e.clientY,ox:offset.x,oy:offset.y,moved:false})}
        onMouseMove={e=>drag&&setDrag(d=>({...d,moved:d.moved||Math.abs(e.clientX-d.x)>3||Math.abs(e.clientY-d.y)>3}))}
        onMouseUp={e=>{
          if(drag?.moved) setOffset({x:drag.ox+e.clientX-drag.x,y:drag.oy+e.clientY-drag.y});
          setDrag(null);
        }}
        onMouseLeave={()=>setDrag(null)}
        onWheel={e=>setZoom(z=>Math.min(4,Math.max(.65,z+(e.deltaY<0?.15:-.15))))}
      >
        <div className="mapTools">
          <button onClick={()=>setZoom(z=>Math.min(4,z+.25))}>+</button>
          <span>{Math.round(zoom*100)}%</span>
          <button onClick={()=>setZoom(z=>Math.max(.65,z-.25))}>−</button>
          <button onClick={()=>{setZoom(1);setOffset({x:0,y:0})}}>Sıfırla</button>
        </div>

        <div className="realMapStage" style={{transform:`translate(${offset.x}px,${offset.y}px) scale(${zoom})`}}>
          <div className="realMap" ref={mapRef} onClick={placeMark}>
            <img src="/images/maps/season-0-map.png" alt="Last War Sezon 0 haritası"/>
            {marks.map(m=><button key={m.id} className="mapMark" style={{left:`${m.x}%`,top:`${m.y}%`,"--mark":m.color}} onClick={e=>{e.stopPropagation();setMarks(p=>p.filter(x=>x.id!==m.id))}} title="Sil">
              [{m.tag}]
            </button>)}
          </div>
        </div>
        <div className="mapHelp">Tıkla: işaretle • İşarete tıkla: sil • Sürükle: taşı • Tekerlek: yakınlaştır</div>
      </div>
    </section>
  </Layout>
}