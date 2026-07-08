import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

export default function Servers() {
  return (
    <Layout>
      <PageHero eyebrow="SUNUCU MERKEZİ" title="Sunucu Takibi" description="Sunucu günü, sezon durumu ve aktif içerik takibi için hazırlanmış bölüm." />
      <section className="contentSection"><div className="container">
        <div className="serverSpotlight"><div><span className="eyebrow">BİZİM SUNUCU</span><h2>#2248</h2><p>[KSHN] ittifakı için rehber ve planlama merkezi.</p></div><div className="serverCode">2248</div></div>
        <div className="noticeBox">Sunucu verileri için doğrulanmış güncel veri kaynağı bağlandığında arama ve istatistik tablosu burada aktif olacak.</div>
      </div></section>
    </Layout>
  );
}