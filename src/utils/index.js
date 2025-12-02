export const validate = ({ title, pic, content }) => {
  const newErrors = {};

  if (!title?.trim()) newErrors.title = "Title is required.";
  if (!pic || pic.size === 0) {
    newErrors.pic = "Pic is required.";
  }
  if (!content?.trim()) newErrors.content = "Content is required.";

  return newErrors;
};
export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
