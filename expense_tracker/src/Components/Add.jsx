function Add() {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Add New Expense
      </h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Title"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Enter Amount"
          className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Select Category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Others</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default Add;
