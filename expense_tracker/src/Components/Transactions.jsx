import { useState } from "react";
import { useExpense } from "../Context/Expense_Context";

function Transactions() {
  const { Expense , setExpense } = useExpense();
  const [editIndex, setEditIndex] = useState(null);
  const [updatedItem , setupdatedItem] = useState({})

  const handleEdit = (index ,item) => {
    setEditIndex(index)
    setupdatedItem(item)
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setupdatedItem((prev) => ({...prev , [name] : value}))
  }

  const handleSave = (index) => {
  const updatedList = [...Expense];
  updatedList[index] = updatedItem;
  setExpense(updatedList);
  setEditIndex(null); 
  }

  return (
    <>
      <div className="text-left">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Recent Transactions
        </h3>

        {Expense.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row justify-between items-start md:items-center p-4 mb-3 rounded-xl shadow-md border-l-8
              ${
                item.Type === "Income"
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
              }
            `}
          >
            {editIndex === index ? (
              <>
              <div className="flex flex-col md:flex-row gap-3 w-full">
              {/* Title Input */}
              <input
                type="text"
                name="Title"
                value={updatedItem.Title}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1 w-full md:w-1/5"
                placeholder="Title"
              />

              {/* Category Input */}
              <input
                type="text"
                name="Category"
                value={updatedItem.Category}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1 w-full md:w-1/5"
                placeholder="Category"
              />

              {/* Type Select */}
              <select
                name="Type"
                value={updatedItem.Type}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1 w-full md:w-1/5"
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </select>

              {/* Amount Input */}
              <input
                type="number"
                name="Amount"
                value={updatedItem.Amount}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-2 py-1 w-full md:w-1/5"
                placeholder="Amount"
              />

              {/* Save Button */}
              <button
                onClick={() => handleSave(index)}
                className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition"
              >
                Save
              </button>
            </div>
              </>
            ) : (
              <>
                {/* Normal view */}
                <div>
                  <h4 className="font-medium text-gray-800 text-lg">
                    {item.Title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.Category}</p>
                </div>

                <div className="text-sm text-gray-400 mt-1 md:mt-0">
                  {new Date(item.Date || Date.now()).toLocaleDateString()}
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center mt-2 md:mt-0 gap-2">
                  <div
                    className={`font-bold ${
                      item.Type === "Income"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {item.Type === "Income" ? "+" : "-"}₹{item.Amount} (
                    {item.Type})
                  </div>

                  <button
                    onClick={() => handleEdit(index , item)}
                    className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>

                  <button className="px-3 py-1 rounded-md bg-red-500 text-white text-sm hover:bg-red-600 transition">
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Transactions;
