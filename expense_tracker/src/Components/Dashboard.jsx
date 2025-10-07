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
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Transactions from "./Transactions";


function Dashboard() {
  const { Expense } = useExpense();
  const [Income, setIncome] = useState(0);

  const [Ex, setEx] = useState(0);
  const [i , setI] = useState(0);
  const [F , setF] = useState(0);
  const [T , setT] = useState(0);
  const [S , setS] = useState(0);
  const [O , setO] = useState(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    let cat_i = 0
    let cat_F = 0
    let cat_T = 0
    let cat_S = 0
    let cat_O = 0


  Expense && Expense.forEach((item) => {
      if (item.Type === "Income") totalIncome += Number(item.Amount);
      else totalExpense += Number(item.Amount);
    });


    Expense.forEach((item) => {
      if(item.Category == "Income"){
        cat_i += Number(item.Amount)
      }
      else if(item.Category == "Food"){
        cat_F += Number(item.Amount)
      }
      else if(item.Category == "Transport"){
        cat_T += Number(item.Amount)
      }
      else if(item.Category == "Shopping"){
        cat_S += Number(item.Amount)
      }
      else if(item.Category == "Others"){
        cat_O += Number(item.Amount)
      }
    })

    setIncome(totalIncome);
    setEx(totalExpense);
    setI(cat_i)
    setF(cat_F)
    setT(cat_T)
    setS(cat_S)
    setO(cat_O)


  }, [Expense]);

 
  
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-100 p-6 rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold text-green-700">Total Income</h3>
          <p className="text-2xl font-bold mt-2">₹{Income}</p>
        </div>

        <div className="bg-red-100 p-6 rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold text-red-700">Total Expense</h3>
          <p className="text-2xl font-bold mt-2">₹{Ex}</p>
        </div>

        <div className="bg-yellow-100 p-6 rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold text-yellow-700">Balance</h3>
          <p className="text-2xl font-bold mt-2">₹{Income - Ex}</p>
        </div>
      </div>

     
      <div className="grid md:grid-cols-2 gap-6 mb-10">
       
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">Income vs Expense (Bar Chart)</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart
                data={[
                  { name: "Income", amount: Income },
                  { name: "Expense", amount: Ex },
                ]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">Income vs Expense (Pie Chart)</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
              <Pie
              data={
                [
                  {name : "Income" , value : i },
                  {name : "Food" , value : F },
                  {name : "Transport" , value : T },
                  {name : "Shopping" , value : S },
                  {name : "Others" , value : O },
                ]
              }
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
              >
                 <Cell fill="#f87171" />   {/* Food */}
                <Cell fill="#60a5fa" />   {/* Transport */}
                <Cell fill="#facc15" />   {/* Shopping */}
                <Cell fill="#34d399" />

              </Pie>
              <Tooltip/>
              <Legend verticalAlign="bottom"/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

     
      <div className="text-left">
       <Transactions/>
      </div>
    </div>
  );
}

export default Dashboard;
