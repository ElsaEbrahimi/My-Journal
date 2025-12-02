export const validate = ({ title, pic, content, date }, existingDates = []) => {
  const newErrors = {};

  if (!title?.trim()) newErrors.title = "Title is required.";
  if (!pic || pic.size === 0) {
    newErrors.pic = "Pic is required.";
  }
  if (!date || !date.trim()) newErrors.date = "Date is required.";
  if (!content?.trim()) newErrors.content = "Content is required.";

  // Check for duplicate date
  if (date && existingDates.includes(date)) {
    newErrors.date = "This date already has a journal entry.";
  }

  return newErrors;
};
export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
