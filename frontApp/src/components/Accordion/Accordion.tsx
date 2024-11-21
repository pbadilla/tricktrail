// import React, { useEffect, useRef, useState } from "react";

// import Checkbox from "@components/Checkboxes/Checkbox";

// import { AccordionItemProps } from "@types/types";

// import { normalize } from "@utils/utils";
// import { useTotalTrueCountedValues } from "@context/TotalCountContext";

// import { RiArrowDropDownLine } from "react-icons/ri";
// import { TbClipboardText } from "react-icons/tb";
// import "./Accordion.styles.scss";

// const AccordionItem: React.FC<AccordionItemProps> = ({
//   question,
//   answer,
//   isOpen,
//   onClick,
// }) => {
//   const contentHeight = useRef<HTMLDivElement>(null);
//   const { setProgressBarValue, totalTrueCountedValues } =
//     useTotalTrueCountedValues();

//   const normalizedValue = totalTrueCountedValues ?? 0;

//   const [checkedItems, setCheckedItems] = useState<boolean[]>(
//     answer.map((task) => task.checked),
//   );

//   const handleChange = (checked: boolean, index: number, value: number) => {
//     setCheckedItems((prevState) => {
//       const updatedCheckedItems = [...prevState];
//       updatedCheckedItems[index] = checked;
//       return updatedCheckedItems;
//     });

//     setProgressBarValue((prevValue) =>
//       checked ? prevValue + value : prevValue - value,
//     );
//   };

//   const allChecked = checkedItems.every(Boolean);

//   useEffect(() => {
//     if (isOpen && contentHeight.current) {
//       contentHeight.current.style.height = `${contentHeight.current.scrollHeight}px`;
//     } else {
//       contentHeight.current?.style.removeProperty("height");
//     }
//   }, [isOpen]);

//   return (
//     <div className="wrapper">
//       <button
//         className={`question-container ${isOpen ? "active" : ""}`}
//         onClick={onClick}
//       >
//         <div className="question-container-title">
//           <TbClipboardText />
//           <p className={allChecked ? "all-checked" : ""}>{question}</p>
//         </div>
//         <div className="question-container-dropdown_arrow">
//           <p
//             className={`question-container-dropdown_arrow-label${
//               isOpen ? "_open" : "_close"
//             }`}
//           >
//             {isOpen ? "Show" : "Hide"}
//           </p>
//           <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
//         </div>
//       </button>

//       <div
//         ref={contentHeight}
//         className={`answer-container ${isOpen ? "open" : ""}`}
//         style={{
//           maxHeight: isOpen ? `${contentHeight.current?.scrollHeight}px` : "0",
//         }}
//       >
//         {answer?.map((item, index) => (
//           <Checkbox
//             className="answer-content"
//             key={index}
//             label={item.description}
//             checked={checkedItems[index]}
//             onChange={(event) =>
//               handleChange(
//                 event.target.checked,
//                 index,
//                 parseFloat(normalize(normalizedValue, item.value).toFixed(0)),
//               )
//             }
//             dataValue={parseFloat(
//               normalize(normalizedValue, item.value).toFixed(0),
//             )}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AccordionItem;
