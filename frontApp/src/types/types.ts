export interface ProgressBarProps {
  bgcolor: string;
  completed: number;
  children?: React.ReactNode;
}

export interface AccordionItemProps {
  question: string;
  answer: Task[];
  isOpen: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface TaskGroup {
  name: string;
  tasks: Task[];
}

export interface CustomCheckboxEvent
  extends React.ChangeEvent<HTMLInputElement> {
  newValue: boolean;
  normalizedValue: number;
}

export interface CustomCheckboxEvent
  extends React.ChangeEvent<HTMLInputElement> {
  newValue: boolean;
}

export interface CheckboxProps {
  className?: string;
  label: string;
  checked: boolean;
  onChange: (event: CustomCheckboxEvent) => void;
  dataValue?: number;
  normalizedValue?: number;
}

export interface ContextProps {
  totalTrueCountedValues: number | null;
  setTotalTrueCountedValues: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  progressBarValue: number;
  setProgressBarValue: React.Dispatch<React.SetStateAction<number>>;
}
