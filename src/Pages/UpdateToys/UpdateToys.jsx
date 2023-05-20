import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const UpdateToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [selectValue, setSelectValue] = useState("");
  const handleChangeValue = (event) => {
    setSelectValue(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.toysName.value;
    const sellerName = form.sellerName.value;
    const picture = form.photo.value;
    const category = selectValue;
    const email = form.email.value;
    const password = form.password.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const addedToys = {
      name,
      sellerName,
      picture,
      category,
      price,
      rating,
      quantity,
      email,
      password,
      description,
    };
    console.log(addedToys);

    fetch("http://localhost:5500/allToys", {
      method: "POST",
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
      <h2 className="sm:text-5xl py-10 text-2xl font-bold title-font mb-4 text-center">
        Update Toys
      </h2>
      <div className="container px-5 py-8 mb-10 mx-auto card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <form onSubmit={handleForm}>
          <div className="grid grid-cols-2 items-center gap-5 mb-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toys Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="Toys Name"
                name="toysName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="Seller Name"
                name="sellerName"
                defaultValue={user?.displayName}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-5 mb-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                required
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-5 mb-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Photo URL</span>
              </label>
              <input
                type="text"
                required
                placeholder="Toy Photo URL"
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium"
              >
                Category
              </label>
              <select
                required
                className="input input-bordered"
                onChange={handleChangeValue}
              >
                <option value="PoliceCar">Police Car</option>
                <option value="FireTruck">Mini Fire Truck</option>
                <option value="RegularCar">Regular Car</option>
              </select>
            </div>
          </div>
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
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                required
                name="rating"
                placeholder="Rating"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-5 mb-5">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                required
                name="description"
                placeholder="description"
                className="input input-bordered"
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
    </div>
  );
};

export default UpdateToys;
