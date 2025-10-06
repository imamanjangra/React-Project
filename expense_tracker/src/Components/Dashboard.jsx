import { useEffect, useState } from "react";
import { useExpense } from "../Context/Expense_Context";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const { Expense } = useExpense();
  const [Income, setIncome] = useState(0);
  const [Ex, setEx] = useState(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    Expense.forEach((item) => {
      if (item.Type === "Income") {
        totalIncome += Number(item.Amount);
      } else {
        totalExpense += Number(item.Amount);
      }
    });

    setIncome(totalIncome);
    setEx(totalExpense);
  }, [Expense]);

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-md p-8 text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Dashboard</h2>

      {/* === Summary Cards === */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-green-700">Total Income</h3>
          <p className="text-2xl font-bold mt-2">{Income}</p>
        </div>

        <div className="bg-red-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold text-red-700">Total Expense</h3>
          <p className="text-2xl font-bold mt-2">{Ex}</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-xl shadow col-span-2 md:col-span-1">
          <h3 className="text-xl font-semibold text-yellow-700">Balance</h3>
          <p className="text-2xl font-bold mt-2">{Income - Ex}</p>
        </div>
      </div>

     
      <div className="mt-10" style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <BarChart
          data={[
            {name : "Income" , amount : Income},
            {name : "Expense" , amount : Ex}
          ]}
             margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis data="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Bar dataKey="amount" fill="#8884d8"/>
          </BarChart>
        </ResponsiveContainer>
      </div>


      
    </div>
  );
}

export default Dashboard;
