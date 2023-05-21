/* import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  const { _id, price, quantity, description } = toys;
  console.log(_id);

  const handleForm = (event, _id) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addedToys = {
      price,
      quantity,
      description,
    };

    fetch(`https://assignment-11-sever-delta.vercel.app/updateToy/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kidol | Update Toys</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar></Navbar>
      <h2 className="sm:text-5xl py-10 text-2xl font-bold title-font mb-4 text-center">
        Update Toys
      </h2>
      <div className="container px-5 py-8 mb-10 mx-auto card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={handleForm}>
          <div className="grid grid-cols-2 items-center gap-5 mb-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                required
                defaultValue={price}
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                required
                defaultValue={quantity}
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid items-center gap-5 mb-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                cols="30"
                rows="10"
                required
                defaultValue={description}
                name="description"
                placeholder="description"
                className="input input-bordered h-32"
              />
            </div>
          </div>
          <div className="form-control w-full  md:w-1/3 mx-auto mt-6">
            <Link to="/myToys">
              <button className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 px-10 shadow-md text-black border-gray-500 font-semibold border">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateToys;
 */

// UpdateToys.js

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";

const UpdateToys = () => {
  const { id } = useParams();
  const [toy, setToy] = useState({});
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`https://assignment-11-sever-delta.vercel.app/allToys/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setPrice(data.price);
        setQuantity(data.quantity);
        setDescription(data.description);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const updatedToy = {
      price,
      quantity,
      description,
    };

    fetch(`https://assignment-11-sever-delta.vercel.app/updateToy/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Handle success, e.g., show a success message or redirect to another page
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kidol | Update Toys</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <h2 className="sm:text-5xl py-10 text-2xl font-bold title-font mb-4 text-center">
        Update Toys
      </h2>
      <div className="container px-5 py-8 mb-10 mx-auto card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 items-center gap-5 mb-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid items-center gap-5 mb-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                cols="30"
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                placeholder="Description"
                className="input input-bordered h-32"
              />
            </div>
          </div>
          <div className="form-control w-full md:w-1/3 mx-auto mt-6">
            <Link to="/myToys">
              <button className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 px-10 shadow-md text-black border-gray-500 font-semibold border">
                Submit
              </button>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UpdateToys;
