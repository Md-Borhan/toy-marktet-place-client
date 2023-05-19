import "./facilities.css";
const Facilities = () => {
  return (
    <div className="pt-24 pb-24 container mx-auto px-5">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-5xl text-2xl font-bold title-font mb-4 text-gray-700">
          Our Facilities
        </h1>
        <p className="md:w-2/3 lg:w-1/2 mx-auto leading-relaxed text-base">
          We are provide most facilities. You are buying our products without
          carefree anything embarrassing hidden in the middle of text.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all ">
        <div className="p-4 space-y-3 facilitiesCard md:p-8 text-center border-gray-400 hover:border-gray-500 border-4 relative overflow-hidden">
          <img
            className="mx-auto"
            src="https://htmldemo.net/kidol/kidol/assets/img/icons/f1.png"
            alt="icon"
          />
          <h2 className="font-semibold text-gray-700 text-2xl">
            Free Shipping
          </h2>
          <p>
            We are any product and any place transfer in free product delivery.
          </p>
          <div className="absolute bottom-0 right-0  transition-all icon">
            <img
              src="https://htmldemo.net/kidol/kidol/assets/img/icons/f4.png"
              alt=""
            />
          </div>
        </div>
        <div className="p-4 facilitiesCard space-y-3 md:p-8 text-center border-gray-400 hover:border-gray-500 border-4 relative overflow-hidden">
          <img
            className="mx-auto"
            src="https://htmldemo.net/kidol/kidol/assets/img/icons/f2.png"
            alt="icon"
          />
          <h2 className="font-semibold text-gray-700 text-2xl">Support 24/7</h2>
          <p>We are provide all time support.</p>
          <div className="absolute bottom-0 right-0 transition-all icon">
            <img
              src="https://htmldemo.net/kidol/kidol/assets/img/icons/f5.png"
              alt=""
            />
          </div>
        </div>
        <div className="p-4 space-y-3 facilitiesCard md:p-8 text-center border-gray-400 hover:border-gray-500 border-4 relative overflow-hidden">
          <img
            className="mx-auto"
            src="https://htmldemo.net/kidol/kidol/assets/img/icons/f3.png"
            alt="icon"
          />
          <h2 className="font-semibold text-gray-700 text-2xl">Money Return</h2>
          <p>Open to money return system in our company.</p>
          <div className="absolute bottom-0 right-0  transition-all icon">
            <img
              src="https://htmldemo.net/kidol/kidol/assets/img/icons/f6.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
