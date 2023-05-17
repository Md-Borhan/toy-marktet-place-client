import bannerImg from "../../../assets/bg/banner.png";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#b8dcb6] to-[#c2e0eb]">
      <div className=" w-full md:w-11/12 lg:w-4/5 mx-auto h-[calc(100vh-120px)] mt-3 md:flex items-center justify-center">
        <div>
          <p className="text-xl font-medium">New Arrival!!!</p>
          <h2 className="text-7xl font-bold text-slate-900 ">
            Best Kids Store & Online Shop
          </h2>
          <p className="text-xl font-medium">
            Give The Gift Of Your Children Everyday
          </p>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
