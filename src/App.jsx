
import './App.css'
// import Vector from "@/assets/vector.svg"
// import PizzaImg from "@/assets/pizza.png"
import Home from './app/Home'
import AboutUs from './app/About'
import Articles from './app/Articles'
import Footer from './app/Footer'

function App() {

  return (
    <>
      <main>
        <Home />

        <AboutUs />

        <Articles />

        <Footer />
        {/* <img src={Vector} className='relative z-10' alt='vector1' />
        <img src={PizzaImg} className='absolute top-0' alt='vector1' /> */}
      </main>
    </>
  )
}

export default App
