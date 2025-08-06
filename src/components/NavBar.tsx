import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/favourite" className="nav-links">
          Favourite
        </Link>
      </div>
    </nav>
  );
}
