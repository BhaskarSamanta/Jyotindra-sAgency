import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-2 mb-6 md:mb-0">
          <p className="font-bold text-lg">Links</p>
          <a href="#projects" className="text-sm text-gray-400 hover:text-white">
            Projects
          </a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white">
            About
          </a>
          <a href="#contacts" className="text-sm text-gray-400 hover:text-white">
            Contacts
          </a>
        </div>

        {/* Feedback Section */}
        <div className="flex flex-col space-y-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Your Name Here,"
            className="bg-gray-800 text-sm text-gray-400 px-4 py-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            placeholder="Tell us what you Think..."
            className="bg-gray-800 text-sm text-gray-400 px-4 py-2 rounded-md focus:outline-none"
          />
          <button className="mt-2 px-6 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200">
            Tell us your thoughts →
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">Company @ 2025</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;