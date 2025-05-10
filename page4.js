import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';

export default function CreateGroupScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState('');
  const [isAddingMembers, setIsAddingMembers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddMembers = () => {
    setIsAddingMembers(true);
    // In a real app, this would navigate to member selection screen
    console.log('Navigating to add members screen');
  };

  const handleCreateGroup = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Creating group:', {
        name,
        description,
        currency
      });
      setIsLoading(false);
      // Navigate back in a real app
    }, 800);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col border border-blue-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button className="p-1">
          <X size={24} stroke="#000" />
        </button>
        <h1 className="text-lg font-medium">Create group</h1>
        <div className="w-6"></div> {/* Empty div for centering */}
      </div>

      {/* Form */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Group Name */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter group name"
            className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Group Description */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Group Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>
        
        {/* Currency */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Currency
          </label>
          <div className="flex w-full p-3 bg-gray-100 rounded-lg">
            <input
              type="text"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              placeholder=""
              className="flex-1 bg-transparent focus:outline-none"
            />
            <ChevronDown size={20} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-4 space-y-3">
        <button
          onClick={handleAddMembers}
          className="w-full py-3 bg-blue-500 text-white font-medium rounded-lg"
        >
          Add members
        </button>
        
        <button
          onClick={handleCreateGroup}
          disabled={!name.trim() || isLoading}
          className={`w-full py-3 font-medium rounded-lg ${
            name.trim() && !isLoading
              ? 'bg-gray-200 text-gray-800'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Create group
        </button>
      </div>
    </div>
  );
}