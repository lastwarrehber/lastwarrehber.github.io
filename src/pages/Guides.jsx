import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { guideGroups } from "../data/content";

export default function Guides() {
  return (
    <Layout>
      <PageHero eyebrow="REHBER KÜTÜPHANESİ" title="Türkçe Strateji Rehberleri" description="Başlangıçtan sezon savaşlarına kadar Last War içeriklerini kategori bazında keşfet." />
      <section className="contentSection">
        <div className="container guideGrid">
          {guideGroups.map(item => (
            <article className="guideCard guideCardLarge" key={item.title}>
              <span>{item.count} REHBER</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button className="textButton">Kategoriye Gir →</button>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}