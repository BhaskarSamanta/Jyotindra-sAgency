import "./App.css"
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import StatsSection from "./Components/Stats-section"
import { Button } from "./Components/ui/button"
function App() {
  return (
    <>
      {/* Hero Section with Black Background */}
      <div className="h-screen bg-black flex flex-col">
        <Navbar />
        <HeroSection />
      </div>

      {/* Stats Section */}
      <StatsSection />
      {/* services Section */}
      <div className="flex justify-center mt-44">
      <div className="flex flex-col items-center">

        <p className="text-4xl font-semibold text-gray-800 mt-10">
          OUR SERVICES & WORKS
        </p>
        
        <p className="text-sm text-center font-semibold text-gray-800 mt-1 ml-4 opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Quisquam, voluptatibus.
        </p>
      </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen"></div>
    </>
  )
}

export default App
