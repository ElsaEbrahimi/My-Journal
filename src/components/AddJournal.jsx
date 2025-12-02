import "cally";
import { useState, useRef, useActionState } from "react";
import { sleep, validate } from "../utils/index.js";
import SubmitBtn from "./SubmitBtn.jsx";
import { useJournals } from "../contexts/JournalContext";
import { useOutletContext } from "react-router";
const AddJournal = () => {
  // From use context
  const { addJournal } = useJournals();

  // From Outlet context
  const { entries, setEntries } = useOutletContext();

  // State for showing the selected date on the button
  const [selectedDate, setSelectedDate] = useState("");

  // Ref to access the Cally web component directly
  const calRef = useRef(null);

  // useActionState handles form submission, validation errors, and loading state
  const [state, formAction, isPending] = useActionState(action, {});

  // Action runs on form submit (React server-like client action)
  async function action(_prevState, formData) {
    // Get form values
    const title = formData.get("title");
    const date = formData.get("date");
    const content = formData.get("content");
    const pic = formData.get("pic"); // File object

    // Validate fields
    const validationErrors = validate({ title, content, pic, date });

    // If there are validation errors → return them
    if (Object.keys(validationErrors).length > 0) {
      return { errors: validationErrors, input: { title, date, content } };
    }

    // Simulate loading
    await sleep(1000);

    // Create a new journal entry
    const newEntry = {
      id: crypto.randomUUID(),
      title,
      date,
      content,
      pic,
    };

    // Update React state and sync with localStorage
    setEntries((prev) => {
      // Add new entry on top
      const updated = [newEntry, ...prev];

      // Save updated list to localStorage
      localStorage.setItem("journals", JSON.stringify(updated));

      return updated; // This updates the UI
    });

    // Save in context (e.g., global state)
    addJournal(newEntry);

    // Feedback to the user
    alert("Journal added!");

    // Clear form fields
    return {
      errors: {},
      input: { title: "", date: "", content: "" },
    };
  }

  // Toggle the calendar popover when clicking the date button
  const handleButtonClick = (e) => {
    e.preventDefault();
    calRef.current?.togglePopover();
  };

  // When a date is clicked → update UI + close popover
  const handleDateClick = () => {
    if (!calRef.current) return;
    setSelectedDate(calRef.current.value);
    calRef.current.hidePopover();
  };

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center py-40 gap-4">
      <h1 className="text-3xl font-bold mb-5">Add Journal Entry</h1>

      {/* Form uses useActionState handler */}
      <form action={formAction} className="flex flex-col gap-4 w-80">
        {/* Title Input */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            defaultValue={state.input?.title}
            name="title"
            id="title"
            disabled={isPending} // disable while submitting
            type="text"
            className="input input-bordered"
            placeholder="Type here"
          />
          {/* Validation error message */}
          {state.errors?.title && (
            <p className="text-sm text-red-600 mt-1">{state.errors.title}</p>
          )}
        </div>
        <label htmlFor="date">Pick a Date</label>
        {/* Date Picker Button */}
        <button className="input input-bordered" onClick={handleButtonClick}>
          {selectedDate}
        </button>

        {/* Cally Web Component Calendar */}
        <calendar-date ref={calRef} class="cally" onClick={handleDateClick}>
          <calendar-month></calendar-month>
        </calendar-date>
        {/* send selected date with the form */}
        <input type="hidden" name="date" value={selectedDate} />

        {/* show date error from action state */}
        {state.errors?.date && (
          <p className="text-sm text-red-600 mt-1">{state.errors.date}</p>
        )}
        {/* File Upload Field */}
        <div>
          <label htmlFor="pic">Pick a Picture</label>
          <input
            type="file"
            className="file-input"
            defaultValue={state.input?.pic}
            name="pic"
            id="pic"
            disabled={isPending}
          />
          <label className="text-xs opacity-60">Max size 2MB</label>

          {/* File validation error */}
          {state.errors?.pic && (
            <p className="text-sm text-red-600 mt-1">{state.errors.pic}</p>
          )}
        </div>

        {/* Content Textarea */}
        <div>
          <label htmlFor="content">Your content</label>
          <textarea
            className="textarea h-24"
            placeholder="Write down whatever is on your mind"
            defaultValue={state.input?.content}
            name="content"
            id="content"
            disabled={isPending}
          ></textarea>

          {/* Content validation error */}
          {state.errors?.content && (
            <p className="text-sm text-red-600 mt-1">{state.errors.content}</p>
          )}
        </div>

        {/* Submit button component */}
        <SubmitBtn />
      </form>
    </div>
  );
};

export default AddJournal;
