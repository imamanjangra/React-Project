function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700">Total Income</h3>
          <p className="text-2xl font-bold mt-2">$0</p>
        </div>
        <div className="bg-red-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-red-700">Total Expense</h3>
          <p className="text-2xl font-bold mt-2">$0</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-xl shadow col-span-2 md:col-span-1">
          <h3 className="text-xl font-semibold text-yellow-700">Balance</h3>
          <p className="text-2xl font-bold mt-2">$0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
