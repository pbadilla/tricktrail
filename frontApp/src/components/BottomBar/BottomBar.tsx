import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaUser, FaMapMarkedAlt, FaPhotoVideo } from "react-icons/fa";
import * as path from 'path';

const BottomBar: React.FC = () => {
  const [active, setActive] = useState("profile");
  const navigate = useNavigate();

  const menuItems = [
    { id: "profile", label: "Profile", icon: <FaUser />, path: '/profile' },
    { id: "maps", label: "Maps", icon: <FaMapMarkedAlt />, path: '/maps' },
    { id: "media", label: "Media", icon: <FaPhotoVideo />, path: '/media' },
  ];

  const handleClick = (id: string, path: string) => {
    setActive(id);
    navigate(path);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t border-gray-200">
      <div className="flex justify-between px-4 py-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.id,item.path)}
            className={`flex flex-col items-center flex-1 py-2 ${
              active === item.id
                ? "text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomBar;
