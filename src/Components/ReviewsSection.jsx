import { FaXTwitter } from "react-icons/fa6";

function ReviewsSection({ reviews }) {
  return (
    <div className=" mt-72 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-4xl md:text-4xl font-medium text-gray-800">PUBLIC CHEERS FOR US</p>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Find out how our users are spreading the word
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col space-y-2"
          >
            <div className="flex justify-between items-center">
              {/* Avatar and User Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={review.avatar || "https://via.placeholder.com/150"}
                  alt={`${review.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.username}</p>
                </div>
              </div>

              {/* Twitter Icon */}
              <a
                // href={`https://twitter.com/${review.username.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-black"
              >
                <FaXTwitter size={20} />
              </a>
            </div>

            {/* Review Content */}
            <p className="text-sm text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsSection;