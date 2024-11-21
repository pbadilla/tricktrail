import React from "react";

import { CheckboxProps, CustomCheckboxEvent } from "@types/types";

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  checked,
  onChange,
  dataValue,
  normalizedValue,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked;
    const customEvent: CustomCheckboxEvent = {
      ...event,
      newValue,
      normalizedValue: normalizedValue || 0,
    };
    onChange(customEvent);
  };

  return (
    <div className={className}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          data-value={dataValue}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
