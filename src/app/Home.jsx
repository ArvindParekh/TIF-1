import Vector from "@/assets/vector.svg";
import PizzaImg from "@/assets/pizza.png";

const Home = () => {
  return (
    <>
      <section className="border border-purple-600 w-full flex flex-col md:hidden">
        <div id="right-top" className="border-2 border-l-purple-900">
          <img
            src={PizzaImg}
            className="absolute top-0 right-0 z-10"
            alt="pizza-img"
          />
          <img
            src={Vector}
            className="absolute top-0 right-0 z-20"
            alt="vector"
          />
          <button className="absolute top-3 right-5 z-30 px-3 py-2 text-sm font-medium rounded-full text-white border border-white cursor-pointer">
            Get in Touch
          </button>
        </div>

        <div
          id="left-bottom"
          className="border my-10 flex flex-col w-3/4 mx-auto text-center"
        >
          <h1 className="text-[#0E2368] text-[38px] font-bold leading-[46px] mb-[21px]">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </h1>
          <p className="text-[#444957] text-[11px] font-normal leading-[18px] mb-[28px]">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className="bg-[#E23744] text-white text-[12.27px] font-bold tracking[1%] mx-auto py-3 px-[30px] rounded-[30px]">
            Explore Now!
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
