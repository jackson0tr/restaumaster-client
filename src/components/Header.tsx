import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import logo from '../assets/logo-bg1.webp'

const Header = () => {
  return (
    <div className="border-b-2 border-b-[#2C7A7B] py-6">
      <div className="container mx-auto flex justify-between items-center">
      <Link to='/'>
          <img src={logo} alt="logo" className="w-1/4 h-1/4" />
       </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
