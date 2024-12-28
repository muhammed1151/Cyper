import { useEffect, useState } from "react";
import Banners from "./components/Banners";
import Category from "./components/Category";
import { FooterM } from "./components/Footer";
import { HeaderMobile } from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductList from "./components/ProductList";
import Ipad from "./components/Ipad";
 

function App() {
  const [sec, setSec] = useState("New Arrival");
  const RenderHandler = () => {
    switch (sec) {
      case "New Arrival":
        return <ProductList />;
    }
  };
  const [activeLink, setActiveLink] = useState("");
  const getLinkClasses = (link: string) =>
    `cursor-pointer ${
      activeLink === link
        ? "border-b-black  border-b-2 text-[15.7px] ml-1 pb-2 text-nowrap font-medium "
        : " text-[#8b8b8b] text-[15.7px] ml-1 text-nowrap font-medium"
    }`;
  useEffect(() => {
    setActiveLink("New Arrival");
  }, []);
  return (
    <>
      <HeaderMobile />
      <LandingPage />
      <Banners />
      <Category />
      <div className=" flex  gap-11 mb-[32px] justify-center ">
        {["New Arrival", "Bestseller", "Featured Products"].map((link) => {
          return (
            <a
              onClick={() => {
                setActiveLink(link);
                setSec(link);
              }}
              className={getLinkClasses(link)}
            >
              {link}
            </a>
          );
        })}
      </div>
      {RenderHandler()}
       <Ipad/>
      <FooterM />
    </>
  );
}

export default App;
