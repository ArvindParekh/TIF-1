import FoodTruck from "../../assets/food-truck.svg";
import instagramLogo from "../../assets/instagram-logo.svg";
import twitterLogo from "../../assets/twitter-logo.svg";
import facebookLogo from "../../assets/facebook-logo.svg";

const ContactDesktop = () => {
  return (
    <>
      <div className="hidden md:block">
        <section className="w-full h-[362px] flex items-center bg-gray-100 px-[42px]">
          <div className="w-1/4">
            <img
              src={FoodTruck}
              width={161}
              height={125}
              className="mx-auto mt-[52px] mb-[42px]"
            />
          </div>
          <div className="w-1/4">
            <h1 className="text-[#0E2368] font-semibold text-[18.84px] leading-[27.22px] tracking-wide mb-[14px]">
              Contact Us
            </h1>
            <p className="mb-[15px] text-[14.66px] leading-[23.03px] text-[#646874]">
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Pharosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p className="mb-[15px] text-[14.66px] text-[#646874]">
              example2020@gmail.com
            </p>
            <p className="mb-[15px] text-[14.66px] text-[#646874]">
              (909) 443-0343
            </p>
          </div>
          <div className="w-1/4 flex flex-col items-center h-[186px]">
            <h1 className="text-[#0E2368] font-semibold text-[18.84px] leading-[27.22px] tracking-wide mb-[14px]">
              More
            </h1>
            <a href="" className="mb-[14px] text=[15px] text-[#646874]">
              About Us
            </a>
            <a href="" className="mb-[14px] text=[15px] text-[#646874]">
              Products
            </a>
            <a
              href=""
              className="mb-[14px] text=[15px] text-left text-[#646874]"
            >
              Career
            </a>
            <a
              href=""
              className="mb-[14px] text=[15px] text-left text-[#646874]"
            >
              Contact Us
            </a>
          </div>
          <div className="w-1/4 h-[186px] flex flex-col-reverse items-center justify-between text-center">
            <footer className="text-[#828B9C]">
              c 2022 Food Truck Example
            </footer>
            <aside>
              <span className="flex items-center justify-center space-x-5">
                <img
                  src={instagramLogo}
                  width={21}
                  height={21}
                  alt="instagram-logo"
                />
                <img
                  src={twitterLogo}
                  width={21.19}
                  height={17.1}
                  alt="twitter-logo"
                />
                <img
                  src={facebookLogo}
                  width={10.97}
                  height={21}
                  alt="facebook-logo"
                />
              </span>
              <h1 className="text-[#0E2368] font-semibold text-[19px] leading-[27px] tracking-wide mb-[11px]">
                Social Links
              </h1>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactDesktop;
