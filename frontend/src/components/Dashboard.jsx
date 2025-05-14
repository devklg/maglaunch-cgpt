// File: src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/user/dashboard").then((res) => setUser(res.data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
          <p className="text-lg mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="text-lg mb-2"><strong>Earnings:</strong> ${user.earnings}</p>
          <p className="text-lg mb-2"><strong>Referrals:</strong> {user.referrals}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
