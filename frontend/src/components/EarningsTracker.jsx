// File: src/components/EarningsTracker.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const EarningsTracker = () => {
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    // Replace '1' with actual authenticated user ID or fetch from auth
    axios.get("/api/earnings/1").then((res) => setEarnings(res.data.earnings));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Earnings Tracker</h1>
        <p className="text-lg">Total Earnings: <span className="font-semibold">${earnings}</span></p>
      </div>
    </div>
  );
};

export default EarningsTracker;
