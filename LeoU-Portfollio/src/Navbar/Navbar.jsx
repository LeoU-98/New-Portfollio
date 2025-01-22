import logo from "../assets/MH.png";
// import logo from "../assets/raviKumarLogo.webp";
import MobileNavList from "./MobileNavList";
import NavList from "./NavList";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-4 sm:px-0 relative">
      <div>
        <a href="/">
          <img src={logo} className="mx-2" width={64} height={64} alt="logo" />
        </a>
      </div>
      <NavList />
      <MobileNavList />
    </nav>
  );
}

export default Navbar;
