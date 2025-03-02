import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-4">
      <h1 className="text-2xl font-bold">Expense Tracker</h1>
      <button
        onClick={() => navigate("/expense")}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Add Expense
      </button>
    </div>
  );
};

export default HomePage;
