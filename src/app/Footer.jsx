import FoodTruck from "../assets/food-truck.svg";
import instagramLogo from "../assets/instagram-logo.svg"
import twitterLogo from "../assets/twitter-logo.svg"
import facebookLogo from "../assets/facebook-logo.svg"

const Footer = () => {

    return (
        <>
            <section className="flex flex-col bg-gray-100 px-[42px]">
                <img src={FoodTruck} width={75} height={58} className="mx-auto mt-[52px] mb-[42px]" />
                <div className="my-10">
                    <h1 className="text-[#0E2368] font-semibold text-[15.77px] leading-[34.8px] tracking-wide mb-2">Contact Us</h1>
                    <p className="mb-3 text-[#646874]">Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Pharosh Gate near YTM Market, XYZ-343434</p>
                    <p className="mb-3 text-[#646874]">example2020@gmail.com</p>
                    <p className="mb-3 text-[#646874]">(909) 443-0343</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-[#0E2368] font-semibold text-[15.77px] leading-[34.8px] tracking-wide mb-2">More</h1>
                    <a href="" className="mb-3 text-[#646874]">About Us</a>
                    <a href="" className="mb-3 text-[#646874]">Products</a>
                    <a href="" className="mb-3 text-[#646874]">Career</a>
                    <a href="" className="mb-3 text-[#646874]">Contact Us</a>
                </div>
                <div className="text-center my-10">
                    <footer className="text-[#828B9C] my-4">c 2022 Food Truck Example</footer>
                    <span className="flex items-center justify-center space-x-5">
                        <img src={instagramLogo} alt="instagram-logo" />
                        <img src={twitterLogo} alt="twitter-logo" />
                        <img src={facebookLogo} alt="facebook-logo" />
                    </span>
                </div>
            </section>
        </>
    )
}

export default Footer;