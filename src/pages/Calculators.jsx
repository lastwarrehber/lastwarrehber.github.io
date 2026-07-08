import { useMemo, useState } from "react";
import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { calculators } from "../data/content";

export default function Calculators() {
  const [start, setStart] = useState(1);
  const [target, setTarget] = useState(100);
  const estimate = useMemo(() => {
    const a = Math.max(1, Number(start));
    const b = Math.max(a, Number(target));
    return Math.round(((b * b * 8500) - (a * a * 8500)) / 1000) * 1000;
  }, [start, target]);

  return (
    <Layout>
      <PageHero eyebrow="HESAPLAYICILAR" title="Oyun Araçları" description="Gelişim ve kaynak planlamasını tek merkezden yönet. Hesaplama veri tabloları içerik aşamasında doğrulanarak genişletilecektir." />
      <section className="contentSection">
        <div className="container">
          <div className="calculatorDemo">
            <div>
              <span className="eyebrow">İLK ÇALIŞAN ARAÇ</span>
              <h2>Kahraman EXP Planlayıcı</h2>
              <p className="muted">Şimdilik arayüz ve hesaplama akışı hazır. Kesin oyun EXP tablosu doğrulandıktan sonra veri tabanına bağlanacak.</p>
            </div>
            <div className="calcFields">
              <label>Başlangıç Seviyesi<input type="number" min="1" value={start} onChange={e => setStart(e.target.value)} /></label>
              <label>Hedef Seviye<input type="number" min="1" value={target} onChange={e => setTarget(e.target.value)} /></label>
              <div className="calcResult"><span>Tahmini EXP</span><strong>{estimate.toLocaleString("tr-TR")}</strong></div>
            </div>
          </div>

          <div className="toolGrid topSpace">
            {calculators.map(([title, text, icon]) => (
              <div className="toolCard" key={title}><span className="toolIcon">{icon}</span><div><h3>{title}</h3><p>{text}</p></div></div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}