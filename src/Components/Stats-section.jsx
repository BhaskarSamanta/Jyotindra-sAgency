function StatsSection() {
  return (
    <div className="w-full bg-py-16 background-color px-6 md:px-12">
      {/* Title and Subheading */}
      <div className="md:w-2/3 mb-12 md:mb-0 flex flex-col justify-center" style={{ marginTop: '2rem' }}>
        <h2 className="text-[32px] md:text-[36px] leading-snug tracking-wider mb-4">
          VIVERRA QUIS, FEUGIAT A, TELLUS.
        </h2>
        <p className="text-[32px] md:text-[36px] font-bold text-gray-800 leading-relaxed">
          PHASELLUS VIVERRA{" "}
          <span className="font-normal text-gray-500">
            NULLA UT METUS VARIUS LAOREET. QUISQUE RUTRUM. AENEAN IMPERDIET.
          </span>
        </p>
      </div>

      {/* Bar Charts moved below and aligned to bottom line */}
      <div className="flex justify-end z-10">
        <div className="flex items-end space-x-12">
          {/* 60% Bar */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">60%</span>
            <div className="w-34 h-60 bg-gray-300 border-t-[2px] border-black" />
          </div>

          {/* 40% Bar */}
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold mb-1">40%</span>
            <span className="text-xs text-gray-700  text-center mt-1 ">
              Project with assumptions
            </span>
            <div className="w-34 h-28 bg-gray-300 border-t-[2px] border-gray-400" />
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full border-t border-gray-600 mb-10" />

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-medium ">500+</h3>
          <p className="text-sm text-gray-700 mt-1">Projects Completed</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-medium ">95%</h3>
          <p className="text-sm text-gray-700 mt-1">Client Satisfaction</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-medium ">15+</h3>
          <p className="text-sm text-gray-700 mt-1">Years of Experience</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-medium ">$325M+</h3>
          <p className="text-sm text-gray-700 mt-1">Total profit from all the time</p>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;