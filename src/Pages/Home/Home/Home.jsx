import Navbar from "../../Share/Navbar/Navbar";
import Footer from "../../Share/Footer/Footer";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <Footer></Footer>
    </div>
  );
};

export default Home;
