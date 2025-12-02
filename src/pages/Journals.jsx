// Journals.jsx

import { useOutletContext } from "react-router-dom";
import JournalCard from "../components/JournalCard";

import { useJournals } from "../contexts/JournalContext";

const Journals = () => {
  // Getting default journals from parent layout via Outlet context
  const { entries: defaultJournal } = useOutletContext();
  // Inside Journals component
  const { journals } = useJournals();

  // Combine new journals with default ones
  const combinedJournals = [
    ...defaultJournal,
    ...journals.filter((j) => !defaultJournal.some((d) => d.date === j.date)),
  ];
  return (
    <div className="py-15 flex flex-col justify-center items-center">
      {/* Banner Image Section */}
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="journal-bg.png" className="max-w-md rounded-lg" />
      </div>

      {/* Page Title */}
      <h1 className="text-5xl font-bold text-(--primary-color)">
        Journal List
      </h1>

      {/* Journal Cards List */}
      <ul className="list bg-base-100 rounded-xl shadow-lg p-4 space-y-4 w-full max-w-3xl">
        {combinedJournals.map(({ id, title, date, image, content }) => (
          // Passing every value to the JournalCard component
          <JournalCard
            key={id} // unique key for React
            id={id}
            title={title} // journal title
            date={date} // journal date (important!)
            content={content} // journal short content
            image={image} // journal image
          />
        ))}
      </ul>
    </div>
  );
};

export default Journals;
