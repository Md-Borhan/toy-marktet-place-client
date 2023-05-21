import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Gallery = () => {
  const { products } = useContext(AuthContext);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 lg:pt-24 mx-auto">
        <div
          data-aos="fade-up"
          className="flex flex-col text-center w-full mb-10 lg:mb-20"
        >
          <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-700">
            Stored New Kids Gallery
          </h1>
          <p className="md:w-2/3 lg:w-1/2 mx-auto leading-relaxed text-base">
            There are many variations of passages, you need to be sure there is
            not anything embarrassing hidden in the middle of text.
          </p>
        </div>
        <div data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
            {products?.slice(0, 6).map((sd) => (
              <div key={sd._id} className=" rounded-lg">
                <img
                  alt="gallery"
                  className="rounded-lg h-60 w-full"
                  src={sd?.picture}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
