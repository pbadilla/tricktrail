import React, { useState } from "react";

const Options: React.FC = () => {
  const [activeTab, setActiveTab] = useState("categories");

  const options = [
    { id: "location", label: "Cómo llegar" },
    { id: "assistance", label: "Asistencia" },
    { id: "comments", label: "Comentarios" },
    { id: "services", label: "Servicios" },
  ];

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="flex border-b border-gray-300">
        {options.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 text-center py-2 px-4 font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
