import { createContext, ReactNode, useContext, useState } from "react";

export type Expense = {
  id: number;
  date: string;
  category: string;
  amount: number;
};

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider = ({ children }: { children: ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context)
    throw new Error("useExpense must be used within ExpenseProvider");
  return context;
};
