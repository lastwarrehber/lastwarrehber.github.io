import { NavLink, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const links = [
  ["/haritalar", "Haritalar"],
  ["/hesaplayicilar", "Hesaplayıcılar"],
  ["/rehberler", "Rehberler"],
  ["/binalar", "Binalar"],
  ["/sunucular", "Sunucular"],
];

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">
          <div className="brandMark">LW</div>
          <div>
            <strong>LAST WAR REHBER</strong>
            <span>TÜRKİYE STRATEJİ MERKEZİ</span>
          </div>
        </Link>

        <nav className="menu">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? "active" : ""}>
              {label}
            </NavLink>
          ))}
        </nav>

        <Link to="/rehberler" className="searchButton" aria-label="Rehberlerde ara">
          <FaSearch />
        </Link>
      </div>
    </header>
  );
}