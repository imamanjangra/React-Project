import { useState } from "react";
import { useExpense } from "../Context/Expense_Context";
import { useNavigate } from "react-router-dom";

function Add() {
  const { addValue } = useExpense();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    Title: "",
    Amount: "",
    Type: "Expense",
    Category: ""
  });

  const HandleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setValue({ ...value, [inputName]: inputValue });
  };

  const submitBtn = (e) => {
    e.preventDefault();

    if (value.Amount === "") {
      alert("Enter Amount!");
      return;
    }
    if (value.Title === "") {
      alert("Enter Title!");
      return;
    }
    if (value.Category === "" || value.Category === "Select Category") {
      alert("Choose a category!");
      return;
    }

    addValue(value);

    setValue({ Title: "", Amount: "", Type: "Expense", Category: "" });

    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Add New Expense
      </h2>

      <form onSubmit={submitBtn} className="flex flex-col gap-4">
        <input
          type="text"
          name="Title"
          value={value.Title}
          onChange={HandleChange}
          placeholder="Enter Title"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          name="Amount"
          value={value.Amount}
          onChange={HandleChange}
          placeholder="Enter Amount"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          name="Type"
          value={value.Type}
          onChange={HandleChange}
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Expense</option>
          <option>Income</option>
        </select>

        <select
          name="Category"
          value={value.Category}
          onChange={HandleChange}
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Select Category</option>
          <option>Income</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Others</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Add;
