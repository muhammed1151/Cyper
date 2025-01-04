import Banners from "./components/Banners";
import Category from "./components/Category";
import { FooterM } from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Ipad from "./components/Ipad";
import { useState } from "react";
import { HeaderMobile } from "./components/UI/HeaderMobile";
import Header from "./components/UI/Header";
import Tages from "./components/UI/Tages";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const widthHandler = () => setWidth(window.innerWidth);
  addEventListener("resize", widthHandler);
  return (
    <>
      {width < 500 ? <HeaderMobile /> : <Header />}
      <LandingPage />
      <Banners />
      <Category />
      <Tages />
      <Ipad />
      <FooterM />
    </>
  );
}

export default App;
