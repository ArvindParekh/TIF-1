import "./App.css";
// import Vector from "@/assets/vector.svg"
// import PizzaImg from "@/assets/pizza.png"
import Home from "./app/Home";
import AboutUs from "./app/About";
import Articles from "./app/Desktop/Articles";
import Footer from "./app/Footer";
import HomeDesktop from "./app/Desktop/Home";
import AboutUsDesktop from "./app/Desktop/About";
import ContactDesktop from "./app/Desktop/Contact";

function App() {
  return (
    <>
      <main>
        <Home />
        <HomeDesktop />

        <AboutUs />
        <AboutUsDesktop />

        <Articles />


        <Footer />
        <ContactDesktop />
        {/* <img src={Vector} className='relative z-10' alt='vector1' />
        <img src={PizzaImg} className='absolute top-0' alt='vector1' /> */}
      </main>
    </>
  );
}

export default App;
