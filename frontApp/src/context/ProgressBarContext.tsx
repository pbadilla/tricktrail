import React, { createContext, useContext, useEffect, useState } from "react";

interface ProgressData {
  bgcolor: string;
  completed: number;
}

interface ProgressBarContextType {
  totalSum: number;
  totalTrueCountedValues: number;
  normalizedValue: number;
}

const ProgressBarContext = createContext<ProgressBarContextType | undefined>(
  undefined,
);

export const ProgressBarProvider: React.FC = ({ children }) => {
  const [contextValue, setContextValue] = useState<ProgressBarContextType>({
    totalSum: 0,
    totalTrueCountedValues: 0,
    normalizedValue: 0,
  });

  return (
    <ProgressBarContext.Provider value={contextValue}>
      {children}
    </ProgressBarContext.Provider>
  );
};

export const useProgressBar = () => {
  const context = useContext(ProgressBarContext);
  if (!context) {
    throw new Error("useProgressBar must be used within a ProgressBarProvider");
  }
  return context;
};
