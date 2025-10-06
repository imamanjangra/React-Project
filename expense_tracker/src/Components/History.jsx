import Transactions from "./Transactions";

function History() {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">History</h2>
          <Transactions/>
    </div>
  );
}

export default History;
