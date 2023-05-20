import bannerImg from "../../../assets/bg/banner.png";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb]">
      <div className=" w-full md:w-11/12 lg:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="px-5 py-8 md:p-0">
          <p className="text-xl font-medium">New Arrival!!!</p>
          <h2 className="text-3xl sm:text-5xl mb-3 md:mb-0 lg:text-7xl font-bold text-slate-900 ">
            Best Kids Store & Online Shop
          </h2>
          <p className="text-xl font-medium">
            Give The Gift Of Your Children Everyday
          </p>
        </div>
        <div className="pt-0 md:pt-8">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
