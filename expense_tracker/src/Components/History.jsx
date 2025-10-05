function History() {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">History</h2>
      <ul className="divide-y divide-gray-200">
        <li className="flex justify-between items-center py-3">
          <span>Food</span>
          <span className="text-red-500 font-semibold">- ₹200</span>
        </li>
        <li className="flex justify-between items-center py-3">
          <span>Salary</span>
          <span className="text-green-500 font-semibold">+ ₹5000</span>
        </li>
      </ul>
    </div>
  );
}

export default History;
