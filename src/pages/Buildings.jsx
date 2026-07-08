import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

const buildings = ["Karargâh", "Teknoloji Merkezi", "Kışla", "Hastane", "Tank Merkezi", "Uçak Merkezi", "Füze Merkezi", "İttifak Merkezi"];

export default function Buildings() {
  return (
    <Layout>
      <PageHero eyebrow="BİNA VERİTABANI" title="Binalar ve Gereksinimler" description="Bina seviyeleri, ön koşullar ve gelişim planları için merkezi Türkçe veritabanı." />
      <section className="contentSection"><div className="container buildingGrid">
        {buildings.map((name, i) => <div className="buildingCard" key={name}><span>0{i+1}</span><h3>{name}</h3><p>Seviye gereksinimleri ve yükseltme verileri içerik aşamasında eklenecek.</p></div>)}
      </div></section>
    </Layout>
  );
}