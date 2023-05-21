/* import { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const ShopCategory = () => {
  const { products, user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categoryList = ["RegularCar", "FireTruck", "PoliceCar"];

  const handleDetails = () => {
    if (!user?.email) {
      alert("You have to log in first to view details");
      return Navigate("/login");
    }
  };

  return (
    <div className="pt-24">
      <div className="category text-center  px-5 lg:px-0 py-12">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-white">
            Shop by Category
          </h2>
          <p className="md:w-2/3 lg:w-1/2 mx-auto leading-relaxed text-white text-base">
            There are many variations of passages, you need to be sure there is
            not anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div>
          <Tabs
            selectedIndex={selectedCategory}
            onSelect={(index) => setSelectedCategory(index)}
          >
            <TabList>
              {categoryList.map((category, index) => (
                <Tab
                  key={index}
                  className="text-white border-0 inline-block p-4 font-medium"
                >
                  {category}
                </Tab>
              ))}
            </TabList>

            {categoryList.map((category, index) => (
              <TabPanel key={index}>
                <h2 className="sm:text-5xl my-12 text-2xl font-bold title-font text-white ">
                  {category}
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-evenly container mx-auto">
                  {products.slice(index * 2, index * 2 + 2)?.map((sd) => (
                    <div
                      key={sd._id}
                      className="card border-dashed border-2 border-slate-400 p-10 hover:border-slate-500 card-compact bg-base-100 shadow-xl"
                    >
                      <figure>
                        <img
                          className="w-96 h-60"
                          src={sd.picture}
                          alt={category}
                        />
                      </figure>
                      <div className="p-6">
                        <h2 className="card-title text-gray-700">{sd.name}</h2>
                        <div className="flex items-center justify-between">
                          <p>Price: ${sd.price}</p>
                          <p>Ratings: {sd.rating}</p>
                        </div>
                        <div className="card-actions mt-4 justify-end">
                          <Link to={`/categoryDetails/${sd._id}`}>
                            <button
                              onClick={handleDetails}
                              className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 shadow-md text-black font-semibold border border-gray-700"
                            >
                              View Details Button
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
 */

import { useContext, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShopCategory = () => {
  const { products, user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categoryList = ["RegularCar", "FireTruck", "PoliceCar"];

  /*   const handleDetails = () => {
    if (!user?.email) {
      alert("You have to log in first to view details");
      return navigate("/login");
    }
  }; */

  return (
    <div className="pt-24">
      <div className="category text-center  px-5 lg:px-0 py-12">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-white">
            Shop by Category
          </h2>
          <p className="md:w-2/3 lg:w-1/2 mx-auto leading-relaxed text-white text-base">
            There are many variations of passages, you need to be sure there is
            not anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div>
          <Tabs
            selectedIndex={selectedCategory}
            onSelect={(index) => setSelectedCategory(index)}
          >
            <TabList>
              {categoryList.map((category, index) => (
                <Tab
                  key={index}
                  className="text-white border-0 inline-block p-4 font-medium"
                >
                  {category}
                </Tab>
              ))}
            </TabList>

            {categoryList.map((category, index) => (
              <TabPanel key={index}>
                <h2 className="sm:text-5xl my-12 text-2xl font-bold title-font text-white ">
                  {category}
                </h2>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-evenly container mx-auto">
                  {products.slice(index * 2, index * 2 + 2)?.map((sd) => (
                    <div
                      key={sd._id}
                      className="card border-dashed border-2 border-slate-400 p-10 hover:border-slate-500 card-compact bg-base-100 shadow-xl"
                    >
                      <figure>
                        <img
                          className="w-96 h-60"
                          src={sd.picture}
                          alt={category}
                        />
                      </figure>
                      <div className="p-6">
                        <h2 className="card-title text-gray-700">{sd.name}</h2>
                        <div className="flex items-center justify-between">
                          <p>Price: ${sd.price}</p>
                          <p>Ratings: {sd.rating}</p>
                        </div>
                        <div className="card-actions mt-4 justify-end">
                          {/*  <Link to={`/categoryDetails/${sd._id}`}>
                            <button
                              onClick={handleDetails}
                              className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 shadow-md text-black font-semibold border border-gray-700"
                            >
                              View Details Button
                            </button>
                          </Link> */}
                          <Link
                            to={user ? `/categoryDetails/${sd._id}` : "/login"}
                            onClick={() => {
                              if (!user) {
                                Swal.fire(
                                  "No Access!",
                                  "You need to login first to view details",
                                  "error"
                                );
                              }
                            }}
                          >
                            <button className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 shadow-md text-black font-semibold border border-gray-700">
                              View Details Button
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
