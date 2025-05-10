import { useState } from 'react';
import { X, Calendar, ChevronDown, ChevronRight } from 'lucide-react';

export default function NewExpenseScreen() {
  const [amount, setAmount] = useState('$0.00');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('01/01/2022');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [group, setGroup] = useState('');
  const [splitMethod, setSplitMethod] = useState('Equally');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    // Simulate API call 
    setTimeout(() => {
      console.log('Saving expense:', {
        amount,
        description,
        date,
        group,
        splitMethod
      });
      setIsLoading(false);
      // Navigate back in a real app
    }, 800);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button className="p-1">
          <X size={24} stroke="#000" />
        </button>
        <h1 className="text-lg font-medium">New Expense</h1>
        <div className="w-6"></div> {/* Empty div for centering */}
      </div>

      {/* Form */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Amount */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Description */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder=""
            className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Date */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="relative">
            <div className="flex w-full p-3 bg-gray-100 rounded-lg">
              <input
                type="text"
                value={date}
                readOnly
                className="flex-1 bg-transparent focus:outline-none"
              />
              <button
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="text-gray-500"
              >
                <Calendar size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Group */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Group
          </label>
          <div className="flex w-full p-3 bg-gray-100 rounded-lg">
            <input
              type="text"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              placeholder=""
              className="flex-1 bg-transparent focus:outline-none"
            />
            <ChevronDown size={20} className="text-gray-500" />
          </div>
        </div>
        
        {/* Split */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Split
          </label>
          <div className="flex justify-between items-center w-full p-3 bg-gray-100 rounded-lg">
            <div>
              <span className="text-gray-900">{splitMethod}</span>
            </div>
            <ChevronRight size={20} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="p-4 mt-auto">
        <button
          onClick={handleSave}
          disabled={isLoading}
          className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg flex items-center justify-center"
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Save"
          )}
        </button>
      </div>
    </div>
  );
}