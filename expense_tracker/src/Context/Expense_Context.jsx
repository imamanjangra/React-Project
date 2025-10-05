import { createContext, useContext, useState } from "react";

export const Expense_Conntext = createContext();

// Custom hook
export const useExpense = () => useContext(Expense_Conntext);

export function ExpenseProvider({ children }) {
  const [Expense, setExpense] = useState([]);

  const addValue = (input) => {
    setExpense((prev) => [{ id: Date.now(), ...input }, ...prev]);
  };

  return (
    <Expense_Conntext.Provider value={{ Expense, addValue }}>
      {children}
    </Expense_Conntext.Provider>
  );
}
