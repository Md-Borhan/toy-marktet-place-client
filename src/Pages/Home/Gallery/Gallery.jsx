import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Gallery = () => {
  const { products } = useContext(AuthContext);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 lg:pt-24 mx-auto">
        <div className="flex flex-col text-center w-full lg:mb-20">
          <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-700">
            Stored New Kids Gallery
          </h1>
          <p className="md:w-2/3 lg:w-1/2 mx-auto leading-relaxed text-base">
            There are many variations of passages, you need to be sure there is
            not anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {products?.map((sd) => (
            <div key={sd._id} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex h-[204px] relative transition-all shadow-lg  border-dashed border-2 border-slate-400 hover:border-slate-500 rounded-lg">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={sd?.picture}
                />
                <div className="px-8 py-10 relative z-10 transition-all w-full border-4 border-gray-200 bg-gradient-to-t from-[#b8dcb6] to-[#c2e0eb] opacity-0 hover:opacity-90">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-700 mb-3">
                    {sd?.name}
                  </h1>
                  <p className="leading-relaxed">
                    {sd?.description.slice(0, 80)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
