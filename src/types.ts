import { type ReactNode } from "react";

interface GoalType {
  title: string;
  description: string;
  id: number;
}

interface GoalProps extends GoalType {
  children?: ReactNode;
  onDeleteGoal: (id: number) => void;
}

export { type GoalType, type GoalProps };
