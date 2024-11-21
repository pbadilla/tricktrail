import { ContextProps } from "@types/types";
import React, { createContext, useContext, useState } from "react";

const TotalTrueCountedValuesContext = createContext<ContextProps>({
  totalTrueCountedValues: null,
  setTotalTrueCountedValues: () => {},
  progressBarValue: 0, // Initial value for progress bar
  setProgressBarValue: () => {}, // Initial setter function for progress bar value
});

export const useTotalTrueCountedValues = () =>
  useContext(TotalTrueCountedValuesContext);

export const TotalTrueCountedValuesProvider: React.FC = ({ children }) => {
  const [totalTrueCountedValues, setTotalTrueCountedValues] = useState<
    number | null
  >(null);
  const [progressBarValue, setProgressBarValue] = useState<number>(0); // Initialize progress bar value

  return (
    <TotalTrueCountedValuesContext.Provider
      value={{
        totalTrueCountedValues,
        setTotalTrueCountedValues,
        progressBarValue,
        setProgressBarValue,
      }}
    >
      {children}
    </TotalTrueCountedValuesContext.Provider>
  );
};
