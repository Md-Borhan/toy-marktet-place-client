import { useLoaderData } from "react-router-dom";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";

const ToysDetails = () => {
  const product = useLoaderData();
  const {
    picture,
    name,
    sellerName,
    email,
    price,
    rating,
    quantity,
    description,
  } = product;
  return (
    <div className="">
      <Navbar></Navbar>
      <h1 className="sm:text-5xl my-16 pb-8 text-center text-2xl font-bold title-font mb-4 text-gray-700">
        Toy Details
      </h1>
      <div className="container w-full md:w-2/5 lg:w-2/3 mb-24  mx-auto bg-red-100 rounded-lg mt-10 p-10">
        <div className="grid grid-cols-4 gap-8 items-center">
          <img
            className="w-36 h-36 rounded-lg"
            src={picture}
            alt="Toy Picture"
          />
          <div>
            <p>Toy Name: {name}</p>
            <p>Seller Name: {sellerName}</p>
            <p>Email: {email}</p>
          </div>
          <div>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div>
            <p>Description:</p>
            {description}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ToysDetails;
