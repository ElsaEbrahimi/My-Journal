import React, { createContext, useContext, useEffect, useState } from "react";
import { loadJournals, saveJournals } from "../utils/storage";

const JournalContext = createContext(null);

export const JournalProvider = ({ children }) => {
  const [journals, setJournals] = useState(() => loadJournals());

  // helper to add a journal at the start
  const addJournal = (journal) => {
    const updated = [journal, ...journals];
    setJournals(updated);
    saveJournals(updated);
  };

  // optional: replace all / remove
  const setAllJournals = (list) => {
    setJournals(list);
    saveJournals(list);
  };

  return (
    <JournalContext.Provider value={{ journals, addJournal, setAllJournals }}>
      {children}
    </JournalContext.Provider>
  );
};

export const useJournals = () => {
  const ctx = useContext(JournalContext);
  if (!ctx) throw new Error("useJournals must be used inside JournalProvider");
  return ctx;
};
