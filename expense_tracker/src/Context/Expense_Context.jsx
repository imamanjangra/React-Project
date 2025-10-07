import { createContext, useContext, useEffect, useState } from "react";

export const Expense_Conntext = createContext();

// Custom hook
export const useExpense = () => useContext(Expense_Conntext);

export function ExpenseProvider({ children }) {
  const [Expense, setExpense] = useState(() => {
    const saved = localStorage.getItem("Expense")
   try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : []; // force array
  } catch {
    return [];
  }

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
