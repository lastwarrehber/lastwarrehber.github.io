import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

const teams = [
  ["TANK", "Tank Takımları", "Savunma, sürdürülebilir hasar ve tank odaklı dizilim rehberleri.", "S"],
  ["UÇAK", "Uçak Takımları", "PvP eşleşmeleri ve uçak odaklı güncel takım analizleri.", "S+"],
  ["FÜZE", "Füze Takımları", "Burst hasarı ve füze odaklı takım planları.", "A+"],
];

export default function Teams() {
  return (
    <Layout>
      <PageHero eyebrow="META TAKIMLAR" title="Takım Strateji Merkezi" description="Takım tipini seç. Güncel meta, alternatif dizilimler ve yatırım önceliklerini kategori bazında incele." />
      <section className="contentSection"><div className="container teamPortalGrid">
        {teams.map(([tag, title, text, tier]) => (
          <article className="teamPortalCard" key={tag}>
            <div className="teamVisual"><span>{tag}</span><strong>{tier}</strong></div>
            <div className="teamPortalContent"><span className="miniBadge">{tag}</span><h2>{title}</h2><p>{text}</p><button className="primaryButton">Rehberi Aç →</button></div>
          </article>
        ))}
      </div></section>
    </Layout>
  );
}