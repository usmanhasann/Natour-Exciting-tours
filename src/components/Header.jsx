import "../styles/Header.css";
import Logo from "../assets/img/logo-white.png";
const Header = () => {
  return (
    <>
      <header
        className="relative h-[95vh] bg-hero bg-cover bg-top"
        style={{
          background:
            "linear-gradient(to right bottom,rgba(126,213,111,0.8), rgba(40,180,131,0.8)),url('/src/assets/img/hero.jpg')",
        }}
      >
        <div className="logo-box absolute top-10 left-10  ">
          <img src={Logo} alt="logo" className="h-[35px] " />
        </div>
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h1 className="text-[#fff] uppercase ">
            <span className="heading-primary-main block font-[400] tracking-[35px] text-[60px]">
              Outdoors
            </span>
            <span className="heading-primary-main block text-[20px] tracking-[17.4px] font-[700]">
              is where life happens
            </span>
          </h1>
        </div>
      </header>
    </>
  );
};
export default Header;
