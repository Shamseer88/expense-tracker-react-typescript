import { useState } from "react";
import { useExpense } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";

const categories = ["Food", "Transport", "Shopping", "Entertainment", "Other"];

const ExpenseEntry = () => {
  const { addExpense } = useExpense();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !category || !amount) return;

    addExpense({
      id: Date.now(),
      date,
      category,
      amount: parseFloat(amount),
    });

    setDate("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold text-center mb-4">Add Expense</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-2 border rounded"
            placeholder="Amount"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Expense
          </button>
          <button
            type="button"
            onClick={() => navigate("/reports")}
            className="text-blue-500 text-sm"
          >
            View Reports
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseEntry;
