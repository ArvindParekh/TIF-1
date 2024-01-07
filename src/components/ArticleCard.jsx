
// eslint-disable-next-line react/prop-types
const ArticleCard = ({src, title, desc})=>{

    return (
        <>
            <section className="w-[381px] h-[554px] rounded-[20.94px] border-[1.37px] flex flex-col items-center">
                <div className="mt-[27px] mb-[35.51px]">
                    <img src={src} alt={`article-${src}`} />
                </div>
                <div className="flex flex-col items-start justify-center w-[295px]">
                    <h2 className="text-[#0E2368] text-[21px] font-bold mb-[14px]">{title}</h2>
                    <p className="text-[#444957] text-[15px] font-normal leading-[27px] mb-[30.41px]">{desc}</p>
                    <button className="w-[131px] h-[42px] border border-[#424961] text-[#424961] rounded-[21px] cursor-pointer">Read More</button>
                </div>
            </section>
        </>
    )
}

export default ArticleCard;