import Banners from "./components/Banners";
import Category from "./components/Category";
import { FooterM } from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Ipad from "./components/Ipad";

import Header from "./components/UI/Header";
import TagsOfBanner from "./components/UI/TagsOfBanner";
import { infoTags } from "./components/ts/Tags";

function App() {
  const resultTags = infoTags.map((infoTag) => {
    return (
      <Ipad
        srcImg={infoTag.img}
        details={infoTag.details}
        name={infoTag.name}
      />
    );
  });

  return (
    <>
      <Header />
      <LandingPage />
      <Banners />
      <Category />
      <TagsOfBanner />
      {resultTags}
      <FooterM />
    </>
  );
}

export default App;
