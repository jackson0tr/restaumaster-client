import { Link } from "react-router-dom";
import logo from '../assets/l2-bg.webp';

const Footer = () => {
  return (
    <div className="bg-[#2C7A7B] py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
       <Link to='/'>
          <img src={logo} alt="logo" className="w-1/4 h-1/4" />
       </Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>
            <Link to="/privacy">
            Privacy Policy
            </Link>
          </span>
          <span>
            <Link to="/terms">
            Terms of Service
            </Link>
          </span>
          <span>Created By <Link className="cursor-pointer text-white border border-b border-solid border-white" to="https://dev-mahmoud.vercel.app">Mahmoud Momahed</Link></span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
