
// eslint-disable-next-line react/prop-types
const ArticleCardMobile = ({src, title, desc})=>{

    return (
        <>
            <section className="w-[271px] h-[484px] rounded-[26.77px] border-[0.88px] border-[#373737] mx-auto flex flex-col items-center">
                <div className="mt-[40px] mb-[39px]">
                    <img src={src} alt={`article-${src}`} width={204} height={166} />
                </div>
                <div className="flex flex-col items-center justify-center w-[295px]">
                    <h2 className="text-[#0E2368] text-[16px] font-bold tracking-wider mb-[6px]">{title}</h2>
                    <p className="w-[213px] text-[#444957] text-[12px] font-normal leading-[22px] mb-[26px]">{desc}</p>
                    <button className="w-[118px] h-[26px] border-2 border-[#424961] text-[#424961] text-[11px] rounded-[27px] cursor-pointer">Read More</button>
                </div>
            </section>
        </>
    )
}

export default ArticleCardMobile;