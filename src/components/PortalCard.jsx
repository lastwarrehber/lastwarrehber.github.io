import { Link } from "react-router-dom";

export default function PortalCard({ icon, title, description, to, badge }) {
  return (
    <Link to={to} className="portalCard">
      <div className="portalCardTop">
        <span className="portalIcon">{icon}</span>
        {badge && <span className="miniBadge">{badge}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="cardLink">İncele →</span>
    </Link>
  );
}