"use client";

import { useState } from "react";

export default function QRForm({ onGenerate }) {
  const [activeTab, setActiveTab] = useState("URL");
  const [inputValue, setInputValue] = useState("");

  const tabs = ["URL", "Text", "Email", "vCard"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onGenerate(inputValue, activeTab);
  };

  return (
    <div className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-2xl">
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="font-medium text-gray-700">
          Enter {activeTab}
        </label>
        <input
          type="text"
          placeholder={`Type your ${activeTab.toLowerCase()} here`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Generate QR Code
        </button>
      </form>
    </div>
  );
}
