"use client";

import { useRouter } from "next/navigation";

const tabs = [
  { id: "url", label: "URL" },
  { id: "text", label: "Text" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
  { id: "wifi", label: "Wi-Fi" },
  { id: "vcard", label: "vCard" },
];

export default function TabForm({ type, value }) {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newValue = form.get("value");
    const newType = form.get("type");
    router.push(`/?type=${newType}&value=${encodeURIComponent(newValue)}`);
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow">
      {/* Tabs */}
      <div className="flex gap-2 mb-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => router.push(`/?type=${tab.id}&value=${value}`)}
            className={`px-4 py-2 rounded ${
              type === tab.id ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="hidden" name="type" value={type} />

        <input
          type="text"
          name="value"
          defaultValue={value}
          placeholder={`Enter ${type}`}
          className="border px-3 py-2 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Generate
        </button>
      </form>
    </div>
  );
}
