import { useLoaderData } from "react-router-dom";
import Navbar from "../../../Share/Navbar/Navbar";
import Footer from "../../../Share/Footer/Footer";

const CategoryDetails = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const {
    name,
    sellerName,
    picture,
    category,
    price,
    rating,
    quantity,
    email,
    description,
  } = loadedData;
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="sm:text-5xl my-16 pb-8 text-center text-2xl font-bold title-font mb-4 text-gray-700">
        Category Details
      </h1>
      <div className="card lg:card-side shadow-xl bg-red-100 rounded-lg p-8">
        <figure className="w-full md:w-1/2 ">
          <img className="rounded-lg w-80" src={picture} alt="Album" />
        </figure>
        <div className="card-body w-full md:w-1/2">
          <h2 className="card-title">Toys Name: {name}</h2>
          <p>Category Name: {category}</p>
          <p>Seller Name: {sellerName}</p>
          <p>Seller email: {email}</p>
          <p>Price: ${price}</p>
          <p>Rating: ${rating}</p>
          <p>Quantity: ${quantity}</p>
          <p>Description ${description}...</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CategoryDetails;
