import { useState } from "react";
import { useNotes } from "../Contexts";


function InputNotes() {
  const [value, setValue] = useState("");
  const { addNotes } = useNotes();

  const submitBtn = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      addNotes({ text: value });
      setValue("");
    } else {
      alert("Enter a value!");
    }
  };

  return (
    <form onSubmit={submitBtn}>
      <div className="bg-white shadow-lg rounded-xl p-6 mb-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Add a New Note
        </h3>

        <textarea
          placeholder="Write your note here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-28 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Add Note
          </button>
        </div>
      </div>
    </form>
  );
}

export default InputNotes;
