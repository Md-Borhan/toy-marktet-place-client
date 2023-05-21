import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";

const AllToys = () => {
  const product = useLoaderData();
  const [toys, setToys] = useState(product);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;
    fetch(
      `https://assignment-11-sever-delta.vercel.app/toySearch/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        console.log(data);
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kidol | All Toys</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <h1 className="sm:text-5xl my-16 pb-8 text-center text-2xl font-bold title-font mb-4 text-gray-700">
        All Toys
      </h1>
      <div className="form-control px-5 md:px-0 mb-6">
        <form
          onSubmit={handleSearch}
          className="relative w-full mx-auto md:w-1/2"
        >
          <input
            type="search"
            required
            name="search"
            placeholder="Search Toys"
            className="input border-gray-300 border w-full"
          />
          <input
            className="bg-gradient-to-r input rounded-full from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 px-10 shadow-md text-black mt-2 md:mt-0 md:absolute right-0 border-gray-500 font-semibold border"
            type="submit"
            value="Search"
          />
        </form>
      </div>
      <div className="overflow-x-auto pb-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>S.L</th>
              <th>Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {toys?.map((product, index) => (
              <tr key={product?._id}>
                <th>{index + 1}</th>
                <td>{product.sellerName}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <Link to={`/toyDetails/${product._id}`}>
                    <button className="modalBtn btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] btn-xs shadow-blue-200 px-10 shadow-md text-black font-semibold border border-gray-400 hover:border-gray-700 ">
                      View Details button
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllToys;
