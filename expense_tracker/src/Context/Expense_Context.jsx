import { createContext, useContext, useEffect, useState } from "react";

export const Expense_Conntext = createContext();

// Custom hook
export const useExpense = () => useContext(Expense_Conntext);

export function ExpenseProvider({ children }) {
  const [Expense, setExpense] = useState(() => {
    const saved = localStorage.getItem("Expense")

    return saved !== "undefined" ? JSON.parse(saved) : [];
 
  }) ;

  const addValue = (input) => {
    setExpense((prev) => [{ id: Date.now(), ...input }, ...prev]);
  };
  const deleteItem = (index) => {
    setExpense((prev) => prev.filter((_, i) => i != index ))
  }

  useEffect(() => {
    localStorage.setItem("Expense" , JSON.stringify(Expense))
  } , [Expense])

  return (
    <Expense_Conntext.Provider value={{ Expense, addValue , setExpense , deleteItem }}>
      {children}
    </Expense_Conntext.Provider>
  );
}
