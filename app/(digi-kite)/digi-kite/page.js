import Collection from "./Collection";
import Category from "./Category";
import Trending from './Trending';
import Circles from "./Circles";
import Discord from "./Discord";
import Header from "./Header";
import Info from "./Info";
import Live from "./Live";
import News from "./News";

import 'swiper/css';
import "swiper/css/pagination";

function DigiKite() {
  return (
    <>
      <Header />
      <Circles />
      <Category />
      <Collection />
      <Trending />
      <Info />
      <Live />
      <News />
      <Discord />
    </>
  );
}

export default DigiKite;