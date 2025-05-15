// File: src/components/SignupsFeed.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const SignupsFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    axios.get("/api/signup").then((res) => setFeed(res.data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Live Signups</h1>
        <ul className="list-disc list-inside text-lg">
          {feed.map((entry, idx) => (
            <li key={idx}>{entry.userId.name} signed up on {new Date(entry.date).toLocaleDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SignupsFeed;
