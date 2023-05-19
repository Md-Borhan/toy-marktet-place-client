import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";

const AllToys = () => {
  const { products } = useContext(AuthContext);
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
            {products?.slice(6).map((product, index) => (
              <tr key={product?._id}>
                <th>{index}</th>
                <td>{product.sellerName}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button className="btn btn-xs">Tiny</button>
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
