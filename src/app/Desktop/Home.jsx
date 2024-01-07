import Vector from "@/assets/vector.svg";
import PizzaImg from "@/assets/pizza.png";
import foodTruck from "@/assets/food-truck.svg";

const HomeDesktop = () => {
  return (
    <>
      <div className="hidden md:block">
        <section id="home-desktop" className=" w-full flex flex-row-reverse h-[804px]">
          <div id="right-top" className="w-1/2">
            <img
              src={PizzaImg}
              className="absolute top-0 right-0 z-10 h-full"
              alt="pizza-img"
            />
            <img
              src={Vector}
              className="absolute top-0 right-0 z-20 h-full"
              alt="vector"
            />
            <button className="border border-white absolute top-8 right-[41px] z-30 w-[122px] h-[42px] text-sm font-medium rounded-[21px] text-white">
              Get in Touch
            </button>
          </div>

          <div
            id="left-bottom"
            className="flex flex-col w-1/2 ml-[100px] mt-[33px]"
          >
            <img
              src={foodTruck}
              alt="food-truck"
              className="block"
              width={107}
              height={83}
            />
            <h1 className="text-[#0E2368] font-bold mb-[21px] text-[62px] leading-[69px] w-[360px] mt-[111px]">
              Discover the <span className="text-[#E23744]">Best</span> Food and
              Drinks
            </h1>
            <p className="text-[#444957] w-[345px] text-[16.44px] font-normal leading-[27.41px] mt-[26px] mb-[41px]">
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <button className="bg-[#E23744] text-white text-[18px] font-bold leading-[36px] tracking[1%] w-[190px] h-[63px] rounded-[34px] cursor-pointer">
              Explore Now!
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeDesktop;
