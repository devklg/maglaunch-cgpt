// File: src/components/ApplicationForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", enroller: "", package: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Valid email is required.";
    if (!formData.enroller) newErrors.enroller = "Enroller name is required.";
    if (!formData.package) newErrors.package = "Please select a package.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await axios.post("/api/auth/signup", formData);
      setShowModal(true);
    } catch {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-300">Magnificent Worldwide</h1>
        <p className="text-md text-orange-400 font-semibold">Marketing & Sales Group — Team 25,000</p>
        <h2 className="text-3xl font-bold mt-6">Pre-Enrollment Form</h2>
      </div>
      <form onSubmit={handleSubmit} className="bg-gray-900 shadow-xl rounded-lg p-8 w-full max-w-2xl">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white border border-gray-700 w-full"
            />
            {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 rounded bg-gray-800 text-white border border-gray-700 w-full"
            />
            {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>
