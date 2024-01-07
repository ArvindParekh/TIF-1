import { useState } from "react";
import ArticleCard from "../../components/ArticleCard";
import { articlesFront, articlesBack } from "../../lib/articlesFront";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";

// eslint-disable-next-line react/prop-types

export const ArticleContainer = () => {
  const [change, setChange] = useState(false);

  return (
    <section className="hidden md:block w-10/12 mx-auto">
      <h2 className="text-[#0E2368] text-[56px] font-semibold tracking-[4%] mb-[41px]">
        Latest Articles
      </h2>
      <div
        className={`${
          !change ? "flex" : "hidden"
        } flex-col lg:flex-row flex-wrap justify-between mt-20 gap-16 lg:gap-0`}
      >
        {articlesFront.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              src={article.src}
              title={article.title}
              desc={article.desc}
            />
          );
        })}
      </div>
      <div
        className={`${
          change ? "flex" : "hidden"
        } flex-col lg:flex-row flex-wrap justify-between mt-20`}
      >
        {articlesBack.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              src={article.src}
              title={article.title}
              desc={article.desc}
            />
          );
        })}
      </div>
      <div className="flex items-center gap-2 my-20 justify-center">
        {/* <AiOutlineLeft
          className={`border ${
            change
              ? "text-blueish border-blueish"
              : "text-gray-400 border-gray-400"
          } h-6 w-6 rounded-md cursor-pointer`}
          onClick={() => setChange(false)}
        /> */}
        <CiSquareChevLeft
          className={`border-0 ${
            !change
              ? "text-gray-400 border-gray-400"
              : "text-blueish border-blueish"
          } h-6 w-6 rounded-md cursor-pointer`}
          onClick={() => setChange(false)}
        />
        <span>{change ? "2/2" : "1/2"}</span>
        {/* <AiOutlineRight
          className={`border ${
            !change
              ? "text-blueish border-blueish"
              : "text-gray-400 border-gray-400"
          } h-6 w-6 border-black rounded-md cursor-pointer`}
          onClick={() => setChange(true)}
        /> */}
        <CiSquareChevRight
          className={`border-0 ${
            !change
              ? "text-blueish border-blueish"
              : "text-gray-400 border-gray-400"
          } h-6 w-6 border-black rounded-md cursor-pointer`}
          onClick={() => setChange(true)}
        />
      </div>
    </section>
  );
};

export default ArticleContainer;
