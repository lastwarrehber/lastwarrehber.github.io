import Layout from "../components/Layout";
import PortalCard from "../components/PortalCard";
import { calculators, guideGroups, seasons } from "../data/content";

export default function Home() {
  return (
    <Layout>
      <section className="homeHero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />
        <div className="container homeHeroContent">
          <span className="eyebrow">#2248 • [KSHN] VELDRAN</span>
          <h1>OYUNU OYNAMA.<br /><em>OYUNU YÖNET.</em></h1>
          <p>Last War oyuncuları için Türkçe strateji araçları, hesaplayıcılar, sezon planları ve güncel rehber merkezi.</p>
          <div className="heroActions">
            <a href="#araclar" className="primaryButton">Araçları Keşfet</a>
            <a href="#rehberler" className="secondaryButton">Rehberlere Git</a>
          </div>
        </div>
      </section>

      <section className="quickStrip">
        <div className="container quickGrid">
          <PortalCard icon="⌖" title="Sezon Haritaları" description="İttifak ve bölge planlama araçları." to="/haritalar" badge="6 SEZON" />
          <PortalCard icon="∑" title="Hesaplayıcılar" description="Kaynak ve gelişim planlama araçları." to="/hesaplayicilar" badge="ARAÇLAR" />
          <PortalCard icon="☰" title="Strateji Rehberleri" description="Türkçe oyun ve etkinlik rehberleri." to="/rehberler" badge="KÜTÜPHANE" />
        </div>
      </section>

      <section className="contentSection" id="araclar">
        <div className="container">
          <div className="sectionHeading">
            <div><span className="eyebrow">PLANLAMA ARAÇLARI</span><h2>Hesaplayıcılar</h2></div>
            <a href="/hesaplayicilar">Tümünü Gör →</a>
          </div>
          <div className="toolGrid">
            {calculators.map(([title, text, icon]) => (
              <div className="toolCard" key={title}>
                <span className="toolIcon">{icon}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contentSection altSection">
        <div className="container">
          <div className="sectionHeading">
            <div><span className="eyebrow">SEZON STRATEJİSİ</span><h2>Haritalar</h2></div>
            <a href="/haritalar">Haritaları Aç →</a>
          </div>
          <div className="seasonGrid">
            {seasons.map(([season, name, text]) => (
              <div className="seasonCard" key={season}>
                <span>{season}</span>
                <h3>{name}</h3>
                <p>{text}</p>
                <a href="/haritalar">Planlamayı Aç →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contentSection" id="rehberler">
        <div className="container">
          <div className="sectionHeading">
            <div><span className="eyebrow">BİLGİ MERKEZİ</span><h2>Rehber Kütüphanesi</h2></div>
            <a href="/rehberler">Tüm Rehberler →</a>
          </div>
          <div className="guideGrid">
            {guideGroups.map((item) => (
              <div className="guideCard" key={item.title}>
                <span>{item.count} REHBER</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}