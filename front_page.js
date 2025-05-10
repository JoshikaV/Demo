'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ExpenseSplitterLanding() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleGetStarted = () => {
    setIsLoading(true);
    // Navigate to create group page after a brief delay
    setTimeout(() => {
      router.push('/groups/create');
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-3xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="p-4 pb-2">
          <h1 className="text-lg font-semibold text-gray-800">Expense Splitter</h1>
        </div>
        
        {/* Illustration */}
        <div className="w-full h-48 bg-orange-50">
          <img 
            src="/images/friends-dining.jpg" 
            alt="Friends sharing a meal"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Split expenses with friends
          </h2>
          
          <p className="text-gray-600 mb-6">
            Create a group, add expenses, and settle up. It's that simple.
          </p>
          
          {/* CTA Button */}
          <button
            onClick={handleGetStarted}
            disabled={isLoading}
            className="w-full py-3 bg-blue-500 text-white text-center rounded-lg font-medium hover:bg-blue-600 transition duration-200 flex items-center justify-center"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Get Started"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}