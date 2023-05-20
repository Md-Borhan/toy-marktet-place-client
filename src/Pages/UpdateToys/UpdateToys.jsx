import { toast } from "react-hot-toast";
import Navbar from "../Share/Navbar/Navbar";
import Footer from "../Share/Footer/Footer";
import { useLoaderData } from "react-router-dom";

const UpdateToys = () => {
  const toys = useLoaderData();
  console.log(toys);

  const handleForm = (event) => {
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
    console.log(addedToys);

    fetch("http://localhost:5500/updateToy", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedToys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Update Toys!");
        }
        console.log(data);
      });
  };
  return (
    <div>
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
                name="description"
                placeholder="description"
                className="input input-bordered h-32"
              />
            </div>
          </div>
          <div className="form-control w-full  md:w-1/3 mx-auto mt-6">
            <button className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 px-10 shadow-md text-black border-gray-500 font-semibold border">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateToys;
