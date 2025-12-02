import { use, useState } from "react";

const [journals, setJournals] = useState(() => {
  const saved = localStorage.getItem("journals");
  return saved ? JSON.parse(saved) : [];
});

const addjournal = (title, date, content) => {
  const newJournal = { title, date, content };
  const updated = [...journals, newJournal];
  setJournals(updated);
  localStorage.setItem("journals", JSON.stringify(updated));
};
