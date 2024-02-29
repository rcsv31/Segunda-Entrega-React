import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="navbar">
            <Link to="/category/sellos-automaticos">SELLOS AUTOMÁTICOS</Link>
            <Link to="/category/sellos-en-seco">SELLOS EN SECO</Link>
            <Link to="/category/sellos-de-lacre">SELLOS DE LACRE</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
