import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("categories");

  const tabs = [
    { id: "categories", label: "Categories" },
    { id: "urban", label: "Urban" },
    { id: "routes", label: "Routes" },
    { id: "tricks", label: "Tricks" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "categories":
        return <div>Explore various categories here!</div>;
      case "urban":
        return <div>Discover urban spots and experiences!</div>;
      case "routes":
        return <div>Check out different routes to explore.</div>;
      case "tricks":
        return <div>Learn and share cool tricks!</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
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

      {/* Tab Content */}
      <div className="mt-4 bg-white p-4 rounded shadow">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
