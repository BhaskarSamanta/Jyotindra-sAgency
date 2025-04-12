

function HeroSection() {
  return (
    <div className="relative h-screen w-full flex flex-col justify-start items-start pt-12 md:justify-center px-4 md:px-8 text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/Best SaaS Product Demo Video  Teamble - Zelios - Animated Video Production (1080p, h264).mp4" // Replace with your video file name
        autoPlay
        loop
        muted
      ></video>

      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-medium leading-snug md:leading-tight">
        WE ARE <br />
        ARCHITECTS OF <br />
        YOUR IMAGINATION
      </h1>

      {/* Subtext and Button */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between w-full">
        {/* Subtext */}
        <p className="text-base md:text-xl text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget lorem.
        </p>

        {/* Button */}
        <div className="mt-4 md:mt-0">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border rounded-4xl border-white text-white text-base md:text-lg font-medium hover:bg-white hover:text-black transition"
          >
            + GET IN TOUCH
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;