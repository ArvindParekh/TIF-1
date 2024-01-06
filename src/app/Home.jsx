import Vector from "@/assets/vector.svg"
import PizzaImg from "@/assets/pizza.png"

const Home = () => {
    return (
        <>
            <section className="flex flex-col">
                <div id="right-top">
                    <img src={PizzaImg} className="z-10" alt="pizza-img" />
                    <img src={Vector} className="absolute top-0 z-20" alt="vector" />
                    <button className="absolute top-3 right-5 z-30 px-3 py-2 text-sm font-medium rounded-full text-white border border-white">Get in Touch</button>
                </div>
            </section>
            <section id="left-bottom" className="my-10 flex flex-col w-3/4 mx-auto text-center">
                <h1 className="text-[#0E2368] text-[38px] font-bold leading-[46px] mb-[21px]">Discover the <span className="text-[#E23744]">Best</span> Food and Drinks</h1>
                <p className="text-[#444957] text-[11px] font-normal leading-[18px] mb-[28px]">Naturally made Healthcare Products for the better care & support of your body.</p>
                <button className="bg-[#E23744] text-white text-[12.27px] font-bold tracking[1%] mx-auto py-3 px-[30px] rounded-[30px]">Explore Now!</button>
            </section>

        </>
    )
}

export default Home;