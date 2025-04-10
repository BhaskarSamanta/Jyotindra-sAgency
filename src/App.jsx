import "./App.css"
import Navbar from "./Components/Navbar"
import HeroSection from "./Components/HeroSection"
import StatsSection from "./Components/Stats-section"
import ServiceAccordition from "./Components/ServiceAccordition"

function App() {
  const accordionsData = [
    {
      number: "01",
      heading: "SFX/VFX",
      subtext: "ultricies nec, pellentesque eu, pretium quis, sem.",
      cards: [
        {
          image: "/images/sfx1.jpg",
          title: "SFX Project 1",
          description: "Description for SFX Project 1.",
          tags: ["SFX", "VFX"],
        },
        {
          image: "/images/sfx2.jpg",
          title: "SFX Project 2",
          description: "Description for SFX Project 2.",
          tags: ["Special Effects", "Animation"],
        },
      ],
    },
    {
      number: "02",
      heading: "3D Modeling",
      subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cards: [
        {
          image: "/images/3d1.jpg",
          title: "3D Model 1",
          description: "Description for 3D Model 1.",
          tags: ["3D", "Modeling"],
        },
        {
          image: "/images/3d2.jpg",
          title: "3D Model 2",
          description: "Description for 3D Model 2.",
          tags: ["Rendering", "Design"],
        },
        {
          image: "/images/3d2.jpg",
          title: "3D Model 2",
          description: "Description for 3D Model 2.",
          tags: ["Rendering", "Design"],
        },
        {
          image: "/images/3d2.jpg",
          title: "3D Model 2",
          description: "Description for 3D Model 2.",
          tags: ["Rendering", "Design"],
        },
      ],
    },
    {
      number: "03",
      heading: "Motion Capture",
      subtext: "Praesent libero. Sed cursus ante dapibus diam.",
      cards: [
        {
          image: "/images/motion1.jpg",
          title: "Motion Capture 1",
          description: "Description for Motion Capture 1.",
          tags: ["Motion", "Capture"],
        },
        {
          image: "/images/motion2.jpg",
          title: "Motion Capture 2",
          description: "Description for Motion Capture 2.",
          tags: ["Performance", "Animation"],
        },
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />

      <div className="flex flex-col items-center w-full pl-4 pr-4 mt-10">
        <p className="text-4xl font-semibold text-gray-800">OUR SERVICES & WORKS</p>
        <p className="text-sm text-center font-semibold text-gray-800 opacity-70 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        {accordionsData.map((accordion, index) => (
          <ServiceAccordition
            key={index}
            number={accordion.number}
            heading={accordion.heading}
            subtext={accordion.subtext}
            cards={accordion.cards}
          />
        ))}
      </div>
      
    </>
  )
}

export default App
