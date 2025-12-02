import { useParams, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useJournals } from "../contexts/JournalContext";

const SingleJournal = () => {
  // Get the "id" parameter from URL
  const { id } = useParams();

  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Get default journals passed from parent layout via Outlet context
  const { entries: defaultJournal = [] } = useOutletContext() || {};

  // Get journals stored in context
  const { journals } = useJournals();

  // Combine default and user-added journals
  const combinedJournals = [...defaultJournal, ...journals];

  // Find journal by id (convert URL id to string for proper comparison)
  const journal = combinedJournals.find((j) => String(j.id) === id);

  // If journal not found, show a message
  if (!journal) return <p>Journal not found</p>;

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Journal image */}
        <img
          src={journal.image || "/no-pic.jpg"}
          onError={(e) => {
            e.currentTarget.src = "/no-pic.jpg"; // fallback image
          }}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          {/* Journal title */}
          <h1 className="text-5xl font-bold">{journal.title}</h1>

          {/* Journal date */}
          <p className="py-6">{journal.date}</p>

          {/* Journal content */}
          <p className="py-6">{journal.content}</p>

          {/* Button to go back to previous page */}
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleJournal;
