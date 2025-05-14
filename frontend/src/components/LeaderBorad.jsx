// File: src/components/Leaderboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/leaderboard").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      <ul className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-2xl">
        {users.map((user, idx) => (
          <li key={idx} className="py-2 border-b border-gray-700 text-lg">
            {user.name} — {user.referrals} referrals
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
