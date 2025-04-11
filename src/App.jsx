import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StatsSection from "./Components/Stats-section";
import ServiceAccordition from "./Components/ServiceAccordition";
import ReviewsSection from "./Components/ReviewsSection";
import Footer from "./Components/Footer";

function App() {
  const accordionsData = [
    {
      number: "01",
      heading: "SFX/VFX",
      subtext: "ultricies nec, pellentesque eu, pretium quis, sem.",
      cards: [
        {
          image: "../public/dummy.jpeg",
          title: "SFX Project 1",
          description: "Description for SFX Project 1.",
          tags: ["SFX", "VFX"],
        },
        {
          image: "../public/dummy.jpeg",
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
          image: "../public/dummy.jpeg",
          title: "3D Model 1",
          description: "Description for 3D Model 1.",
          tags: ["3D", "Modeling"],
        },
        {
          image: "../public/dummy.jpeg",
          title: "3D Model 2",
          description: "Description for 3D Model 2.",
          tags: ["Rendering", "Design"],
        },
        {
          image: "../public/dummy.jpeg",
          title: "3D Model 2",
          description: "Description for 3D Model 2.",
          tags: ["Rendering", "Design"],
        },
        {
          image: "../public/dummy.jpeg",
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
          image: "../public/dummy.jpeg",
          title: "Motion Capture 1",
          description: "Description for Motion Capture 1.",
          tags: ["Motion", "Capture"],
        },
        {
          image: "../public/dummy.jpeg",
          title: "Motion Capture 2",
          description: "Description for Motion Capture 2.",
          tags: ["Performance", "Animation"],
        },
      ],
    },
  ];

  const reviewsData = [
    {
      name: "Harry Smith",
      username: "@ranitdas",
      avatar: "https://i.pravatar.cc/150?img=70",
      content:
        "I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear",
    },
    {
      name: "Harry Smith",
      username: "@ranitdas",
      avatar: "https://i.pravatar.cc/150?img=70",
      content:
        "I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear",
    },
    {
      name: "Liam Brown",
      username: "@ranitdas",
      avatar: "https://i.pravatar.cc/150?img=70",
      content:
        "I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear",
    },
    {
      name: "George Wilson",
      username: "@ranitdas",
      avatar: "https://i.pravatar.cc/150?img=70",
      content:
        "I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear",
    },
    {
      name: "Alex Johnson",
      username: "@alexjohnson",
      avatar: "https://i.pravatar.cc/150?img=70",
      content:
        "The team was incredibly professional and delivered beyond my expectations. Highly recommend their services!",
    },
    {
      name: "Sophia Lee",
      username: "@sophialee",
      avatar: "https://i.pravatar.cc/150?img=70",
      content:
        "Amazing experience! The quality of work and attention to detail were outstanding. Will definitely work with them again.",
    },
  ];

  return (
    <>
      <Navbar />
      <HeroSection />
      <StatsSection />

      <div className="text-center my-60">
        <p className="text-4xl font-semibold text-gray-800">OUR SERVICES & WORKS</p>
        <p className="text-sm font-semibold text-gray-800 opacity-70 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex flex-col items-center w-full px-4 mt-10">
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

      {/* Reviews Section */}
      <ReviewsSection reviews={reviewsData} />

      <div className="mt-96 mb-60"></div>

      {/* Footer Section */}
      <Footer />

    </>
  );
}

export default App;
