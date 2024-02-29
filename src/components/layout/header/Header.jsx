import mayjuLogo from "../../../images/mayjuLogoBlanco.png";
import NavBar from "../../common/navBar/NavBar";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img
          src={mayjuLogo}
          className="logo"
          alt="Logo mayju en color blanco"
        />
      </a>
      <NavBar />
      <CartWidget />
    </header>
  );
};

export default Header;
