import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left Section */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#project"
            className="hover:underline"
          >
            PROJECT
          </a>
          <a
            href="#about"
            className="hover:underline"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="hover:underline"
          >
            CONTACT
          </a>
        </div>

        {/* Right Section */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="hover:underline"
          >
            + CONTACT
          </a>
        </div>

        {/* Hamburger Menu for Small Devices */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-black w-full`}
      >
        <a
          href="#project"
          className="block px-4 py-2 text-center hover:underline"
        >
          PROJECT
        </a>
        <a
          href="#about"
          className="block px-4 py-2 text-center hover:underline"
        >
          ABOUT
        </a>
        <a
          href="#contact"
          className="block px-4 py-2 text-center hover:underline"
        >
          CONTACT
        </a>
        <a
          href="#contact"
          className="block px-4 py-2 text-center hover:underline"
        >
          + CONTACT
        </a>
      </div>
    </nav>
  );
}

export default Navbar;