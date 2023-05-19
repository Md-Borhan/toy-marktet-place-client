import Navbar from "../../Share/Navbar/Navbar";
import Footer from "../../Share/Footer/Footer";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopCategory from "../ShopCategory/ShopCategory";
import { Toaster } from "react-hot-toast";
import { useNavigation } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Facilities from "../Facilities/Facilities";
import Contact from "../Contact/Contact";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <Facilities></Facilities>
      <Contact></Contact>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Home;
