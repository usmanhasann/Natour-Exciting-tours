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
        <div className="logo-box absolute top-10 left-10 ">
          <img src={Logo} alt="logo" className="h-[35px]" />
        </div>
        <h1 className="text-[#fff] uppercase">
          <span className="">Outdoors</span>
          <span>is where life happens</span>
        </h1>
      </header>
    </>
  );
};
export default Header;
