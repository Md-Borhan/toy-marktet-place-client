import { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./shopCategory.css";
import { toast } from "react-hot-toast";
const ShopCategory = () => {
  const { user, productsData } = useContext(AuthContext);

  const handleDetails = (id) => {
    console.log(id);
    if (!user) {
      return toast.error("You have to log in first to view details.");
    }
  };

  return (
    <div className="pt-24">
      <div className="category text-center py-12">
        <div className="mb-12">
          <h2 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-white">
            Shop by Category
          </h2>
          <p className="md:w-2/3 lg:w-1/2 mx-auto leading-relaxed text-white text-base">
            There are many variations of passages, you need to be sure there is
            not anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab className="text-white border-0 inline-block p-4 font-medium">
                Police Car
              </Tab>
              <Tab className="text-white inline-block p-4 font-medium">
                Mini Fire Truck
              </Tab>
              <Tab className="text-white inline-block p-4 font-medium">
                Regular Car
              </Tab>
            </TabList>

            <TabPanel>
              <h2 className="sm:text-5xl my-12 text-2xl font-bold title-font text-white ">
                Police Car
              </h2>
              <div className="flex gap-6 items-center justify-evenly container mx-auto">
                {productsData.slice(0, 2)?.map((sd) => (
                  <div
                    key={sd._id}
                    className="card border-dashed border-2 border-slate-400 hover:border-slate-500 card-compact bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img
                        className="h-[450px] w-[450px]"
                        src={sd.picture}
                        alt="Police Car"
                      />
                    </figure>
                    <div className="p-6">
                      <h2 className="card-title">{sd.name}</h2>
                      <div className="flex items-center justify-between">
                        <p>Price: ${sd.price}</p>
                        <p>Ratings: {sd.rating}</p>
                      </div>
                      <div className="card-actions mt-4 justify-end">
                        <button
                          onClick={() => handleDetails(sd._id)}
                          className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 shadow-md text-black font-semibold border border-gray-700"
                        >
                          View Details Button
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="sm:text-5xl my-12 text-2xl font-bold title-font text-white ">
                Mini Fire Truck
              </h2>
              <div className="flex gap-6 items-center justify-evenly container mx-auto">
                {productsData.slice(2, 4)?.map((sd) => (
                  <div
                    key={sd._id}
                    className="card border-dashed border-2 border-slate-400 hover:border-slate-500 card-compact bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img
                        className="h-[450px] w-[450px]"
                        src={sd.picture}
                        alt="Police Car"
                      />
                    </figure>
                    <div className="p-6">
                      <h2 className="card-title">{sd.name}</h2>
                      <div className="flex items-center justify-between">
                        <p>Price: ${sd.price}</p>
                        <p>Ratings: {sd.rating}</p>
                      </div>
                      <div className="card-actions mt-4 justify-end">
                        <button
                          onClick={() => handleDetails(sd._id)}
                          className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 shadow-md text-black font-semibold border border-gray-700"
                        >
                          View Details Button
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="sm:text-5xl my-12 text-2xl font-bold title-font text-white ">
                Regular Car
              </h2>
              <div className="flex gap-6 items-center justify-evenly container mx-auto">
                {productsData.slice(4, 6)?.map((sd) => (
                  <div
                    key={sd._id}
                    className="card border-dashed border-2 border-slate-400 hover:border-slate-500 card-compact bg-base-100 shadow-xl"
                  >
                    <figure>
                      <img
                        className="h-[450px] w-[450px]"
                        src={sd.picture}
                        alt="Police Car"
                      />
                    </figure>
                    <div className="p-6">
                      <h2 className="card-title">{sd.name}</h2>
                      <div className="flex items-center justify-between">
                        <p>Price: ${sd.price}</p>
                        <p>Ratings: {sd.rating}</p>
                      </div>
                      <div className="card-actions mt-4 justify-end">
                        <button
                          onClick={() => handleDetails(sd._id)}
                          className="btn bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb] shadow-blue-200 shadow-md text-black font-semibold border border-gray-700"
                        >
                          View Details Button
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
