import { Settings, Home, FileText, Users, User } from 'lucide-react';

export default function AllExpensesScreen() {
  const expenses = [
    { id: 1, name: 'Rent', amount: 1000, date: 'Jan 15', sharedWith: 3 },
    { id: 2, name: 'Groceries', amount: 200, date: 'Jan 16', sharedWith: 3 },
    { id: 3, name: 'Internet', amount: 90, date: 'Jan 17', sharedWith: 3 },
    { id: 4, name: 'Utilities', amount: 150, date: 'Jan 18', sharedWith: 3 }
  ];

  const balances = [
    { name: 'You', amount: 100 },
    { name: 'Tom', amount: 100 },
    { name: 'Jerry', amount: 800 }
  ];

  const totalAmount = 1000;

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-blue-200 bg-white">
        <h1 className="text-lg font-medium">All expenses</h1>
        <button className="p-1">
          <Settings size={20} />
        </button>
      </div>

      {/* Summary Section */}
      <div className="p-4 border-b border-blue-200">
        <div className="mb-4">
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-lg font-medium">${totalAmount.toFixed(2)}</div>
        </div>

        {balances.map((person, index) => (
          <div key={index} className="mb-2">
            <div className="text-sm text-gray-500">{person.name}</div>
            <div className="text-lg font-medium">${person.amount.toFixed(2)}</div>
          </div>
        ))}
      </div>

      {/* Expenses List */}
      <div className="flex-1 overflow-auto">
        <h2 className="px-4 pt-4 pb-2 text-xl font-bold">Expenses</h2>
        
        {expenses.map((expense) => (
          <div key={expense.id} className="p-4 border-b border-gray-100">
            <div className="flex justify-between">
              <div className="font-medium">{expense.name}</div>
              <div className="text-gray-500">{expense.date}</div>
            </div>
            <div className="flex justify-between mt-1">
              <div className="font-medium text-lg">${expense.amount.toFixed(2)}</div>
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Shared with {expense.sharedWith} people
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around items-center p-3 border-t border-gray-200 bg-white">
        <button className="flex flex-col items-center text-gray-500">
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-blue-500">
          <FileText size={20} />
          <span className="text-xs mt-1">Activity</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <Users size={20} />
          <span className="text-xs mt-1">Groups</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <User size={20} />
          <span className="text-xs mt-1">You</span>
        </button>
      </div>
    </div>
  );
}