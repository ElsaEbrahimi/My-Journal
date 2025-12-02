// JournalCard.jsx

import { Link } from "react-router-dom";

// Card component to display each journal item
const JournalCard = ({ id, title, date, image, content }) => {
  return (
    // Outer list item / main container
    <li className="p-4 bg-base-100 rounded-xl shadow-md flex gap-4 hover:shadow-lg transition-shadow duration-200">
      {/* Image container with fixed size */}
      <div className="w-32 h-32 rounded-lg overflow-hidden shrink-0">
        {/* Image set to cover the box */}
        <img
          className="w-full h-full object-cover"
          src={image || "/no-pic.jpg"} // Use default if image prop is falsy
          // If the image fails to load, use default image from public folder
          onError={(e) => {
            e.currentTarget.src = "/no-pic.jpg"; // replace with your default image path
          }}
        />
      </div>

      {/* Right side: title, date, content, buttons */}
      <div className="flex flex-col flex-1">
        {/* Journal title */}
        <h3 className="font-bold text-lg">{title}</h3>

        {/* Journal date */}
        <p className="text-sm text-gray-500 mt-1">{date}</p>

        {/* Short preview of the content (2 lines only) */}
        <p className="text-sm mt-2 line-clamp-2">{content}</p>

        {/* Buttons section */}
        <div className="mt-auto flex gap-1 pt-2">
          {/* Favorite (heart) button */}
          {/* hover:bg-pink-200 gives light pink hover effect */}
          <button
            className="btn btn-sm btn-ghost hover:bg-pink-200 material-icons"
            title="Add to favorites"
          >
            favorite
          </button>

          {/* View details button */}

          <button className="btn btn-sm btn-ghost material-icons">
            delete
          </button>
          <Link
            to={`/journals/${id}`}
            className="btn btn-sm btn-outline"
            title="View details"
          >
            Read
          </Link>
        </div>
      </div>
    </li>
  );
};

export default JournalCard;
