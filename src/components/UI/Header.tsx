import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className=" container m-auto  z-20 h-[88px] flex px-[16px] w-full  items-center justify-between  ">
      <img className="w-24 h-[32px]" src="public\images\Logo.png" />
      <NavBar />
    </div>
  );
};

export default Header;
