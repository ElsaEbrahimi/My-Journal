const KEY = "journals";

export const loadJournals = () => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("loadJournals error", e);
    return [];
  }
};

export const saveJournals = (journals) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(journals));
  } catch (e) {
    console.error("saveJournals error", e);
  }
};
