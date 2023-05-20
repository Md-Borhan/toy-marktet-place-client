import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sortingValue, setSortingValue] = useState();
  console.log(sortingValue);

  useEffect(() => {
    const url = `http://localhost:5500/myToys/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5500/deleteToy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleSortingValue = (event) => {
    setSortingValue(event.target.value);
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="sm:text-5xl py-10 text-2xl font-bold title-font mb-4 text-center">
        My Toys
      </h2>
      <div className="my-6">
        <select
          required
          className="input input-bordered"
          onChange={handleSortingValue}
        >
          <option value="descending">Ascending</option>
          <option value="ascending">Descending</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
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
              <th>Actions</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myToys?.map((myToy, index) => (
              <tr key={myToy?._id}>
                <th>{index + 1}</th>
                <td>{myToy.sellerName}</td>
                <td>{myToy.name}</td>
                <td>{myToy.category}</td>
                <td>${myToy.price}</td>
                <td>{myToy.quantity}</td>
                <td>
                  <Link to={`/updateToys/:${myToy._id}`}>
                    {" "}
                    <button className="btn btn-ghost text-gray-700 btn-xs">
                      <FaRegEdit className="text-xl mr-1"></FaRegEdit>Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(myToy._id)}
                    className="btn btn-ghost text-red-500 btn-xs"
                  >
                    <RiDeleteBin5Line className="text-xl  mr-1"></RiDeleteBin5Line>
                    Delete
                  </button>
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

export default MyToys;
