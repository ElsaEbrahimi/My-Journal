import "cally";
import { useState, useRef } from "react";

const AddJournal = () => {
  const [selectedDate, setSelectedDate] = useState("Pick a date");
  const calRef = useRef(null); // Ref برای دسترسی به وب‌کامپوننت

  // باز/بسته کردن پاپ‌آپ
  const handleButtonClick = (e) => {
    e.preventDefault();
    calRef.current?.togglePopover();
  };

  // وقتی روزی انتخاب شد
  const handleDateClick = () => {
    if (!calRef.current) return;
    setSelectedDate(calRef.current.value); // آپدیت state
    calRef.current.hidePopover(); // بستن پاپ‌آپ
  };

  return (
    <div className="grid grid-cols-1 justify-center justify-items-center  py-40 gap-4">
      <h1 className="text-3xl font-bold mb-5">Add Journal Entry</h1>

      <form className="flex flex-col gap-4 w-80">
        {/* Title */}
        <label>Title</label>
        <input
          type="text"
          className="input input-bordered"
          placeholder="Type here"
        />

        {/* Date Picker */}
        <button className="input input-bordered" onClick={handleButtonClick}>
          {selectedDate}
        </button>

        <calendar-date ref={calRef} class="cally" onClick={handleDateClick}>
          <calendar-month></calendar-month>
        </calendar-date>

        {/* File */}
        <label>Pick a file</label>
        <input type="file" className="file-input" />
        <label className="text-xs opacity-60">Max size 2MB</label>

        {/* Bio */}
        <label>Your bio</label>
        <textarea className="textarea h-24" placeholder="Bio"></textarea>

        <button type="submit" className="btn btn-primary">
          Add Journal
        </button>
      </form>
    </div>
  );
};

export default AddJournal;
