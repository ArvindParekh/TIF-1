import aboutImage from "../../assets/about-image.png";

const AboutUsDesktop = () => {
  return (
    <>
      <div className="hidden md:block h-[653px]">
        <section className="bg-[#F0F1F7] w-full h-[467px] px-[50px] mt-[186px] flex items-center justify-center">
          <div className="w-1/2">
            <img src={aboutImage} className="mx-auto" alt="about-image" />
          </div>
          <div className="w-1/2 h-full my-auto flex items-center justify-center">
            <div className="w-[447px] flex flex-col justify-center text-left">
              <h1 className="text-[#0E2368] text-[45px] font-semibold leading-[27px] mb-[27.41px]">
                About Us
              </h1>
              <p className="text-[#444957] text-[15px] font-normal leading-[27px] mb-[21.59px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. t
                has survived not only five centuries.
              </p>
              <button className="bg-[#E23744] text-white text-[16px] font-semibold w-[132px] h-[42px] tracking-[3%] rounded-[21px]">
                Read More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsDesktop;
