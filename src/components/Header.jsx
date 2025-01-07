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
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <h1 className="text-[#fff] uppercase ">
            <span className="heading-primary-main block font-[400] tracking-[35px] text-[60px] hover:shadow-[15px_15px_30px_rgba(0,0,0,0.3)] rounded-[10rem] hover:translate-y-[-5px]">
              Outdoors
            </span>
            <span className="heading-primary-main block text-[20px] tracking-[17.4px] font-[700] hover:">
              is where life happens
            </span>
          </h1>
          <a
            className="bg-white text-center text-[rgb(119,119,119)] py-[15px] px-[40px] inline-block uppercase cursor-pointer rounded-[10rem] active:translate-y-[-1px] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)] hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            href="#"
          >
            Discover our tours
          </a>
        </div>
      </header>
    </>
  );
};
export default Header;
