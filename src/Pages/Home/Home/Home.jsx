import Navbar from "../../Share/Navbar/Navbar";
import Footer from "../../Share/Footer/Footer";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ToysCategory from "../ShopCategory/ToysCategory";
import { Toaster } from "react-hot-toast";
import { useNavigation } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Facilities from "../Facilities/Facilities";
import Contact from "../Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar></Navbar>
      <Banner></Banner>
      <Gallery></Gallery>
      <ToysCategory></ToysCategory>
      <Facilities></Facilities>
      <Contact></Contact>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Home;
