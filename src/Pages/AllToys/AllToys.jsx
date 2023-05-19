import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="sm:text-5xl my-16 pb-8 text-center text-2xl font-bold title-font mb-4 text-gray-700">
        All Toys
      </h1>
      <div className="overflow-x-auto">
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
            {products?.map((product, index) => (
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
