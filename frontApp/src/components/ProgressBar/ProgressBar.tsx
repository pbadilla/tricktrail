import React, { useEffect } from "react";
import { useProgressBar } from "@context/ProgressBarContext";
import { ProgressBarProps } from "@types/types";
import "./ProgressBar.styles.scss"; // Import SCSS file

const ProgressBar: React.FC<ProgressBarProps> = ({
  bgcolor,
  completed,
  children,
}) => {
  const { totalSum, totalTrueCountedValues, normalizedValue } = useProgressBar();

  useEffect(() => {
    // You can use the context values as needed here
    console.log("Total Sum:", totalSum);
    console.log("Total True Counted Values:", totalTrueCountedValues);
    console.log("Normalized Value:", normalizedValue);
  }, [totalSum, totalTrueCountedValues, normalizedValue]);

  const completedValue = completed !== undefined ? completed : 0;

  return (
    <div className="container">
      <div
        className="filler"
        style={{
          width: `${completedValue}%`,
          backgroundColor: bgcolor,
        }}
      >
        <span className="label">{`${completedValue}%`}</span>{" "}
        {/* Use className with SCSS styles */}
      </div>
    </div>
  );
};

export default ProgressBar;
