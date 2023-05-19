import { useLoaderData } from "react-router-dom";

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
    <div className="container px-5 mx-auto bg-red-100 rounded-lg">
      <div className="flex items-center justify-center mt-10 p-10">
        <div>
          <img
            className="w-32 h-32 rounded-lg"
            src={picture}
            alt="Toy Picture"
          />
          <div>
            <p>Toy Name: {name}</p>
            <p>Seller Name: {sellerName}</p>
            <p>Email: {email}</p>
          </div>
          <div>
            <p>Price: {}</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ToysDetails;
