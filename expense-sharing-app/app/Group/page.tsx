'use client';

import { useState, useEffect } from 'react';
import { Users, Plus, X, Check } from 'lucide-react';

interface Friend {
  id: number;
  name: string;
}

export default function GroupPage() {
  const [groupName, setGroupName] = useState('');
  const [friendName, setFriendName] = useState('');
  const [friends, setFriends] = useState<Friend[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAddFriend = () => {
    if (friendName.trim() !== '') {
      const newFriend: Friend = {
        id: Math.floor(Math.random() * 1000000),
        name: friendName.trim()
      };
      setFriends([...friends, newFriend]);
      setFriendName('');
    }
  };

  const handleRemoveFriend = (id: number) => {
    setFriends(friends.filter(friend => friend.id !== id));
  };

  const handleCreateGroup = () => {
    if (groupName.trim() !== '' && friends.length > 0) {
      // Here you would typically save the group to your state management or backend
      console.log('Group created:', { name: groupName, members: friends });
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form after short delay
      setTimeout(() => {
        setGroupName('');
        setFriends([]);
        setShowSuccess(false);
      }, 2000);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {showSuccess ? (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md flex items-center">
          <Check className="mr-2" size={20} />
          <span>Group created successfully!</span>
        </div>
      ) : null}
      
      <div className="flex items-center mb-6">
        <Users className="text-blue-500 mr-2" size={24} />
        <h1 className="text-2xl font-bold text-gray-800">Create a Group</h1>
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="groupName">
          Group Name
        </label>
        <input
          id="groupName"
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Weekend Trip, Roommates, etc."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          Add Friends
        </label>
        <div className="flex">
          <input
            type="text"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            placeholder="Friend's name"
            className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === 'Enter' && handleAddFriend()}
          />
          <button
            onClick={handleAddFriend}
            className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 flex items-center"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
      
      {friends.length > 0 && (
        <div className="mb-6">
          <h3 className="text-gray-700 text-sm font-semibold mb-2">Friends in this group:</h3>
          <div className="space-y-2">
            {friends.map(friend => (
              <div 
                key={friend.id} 
                className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
              >
                <span className="text-gray-800">{friend.name}</span>
                <button 
                  onClick={() => handleRemoveFriend(friend.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <button
        onClick={handleCreateGroup}
        disabled={groupName.trim() === '' || friends.length === 0}
        className={`w-full py-3 rounded-md flex items-center justify-center ${
          groupName.trim() !== '' && friends.length > 0
            ? 'bg-blue-500 hover:bg-blue-600 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Create Group
      </button>
    </div>
  );
} 