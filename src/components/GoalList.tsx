import { FC } from "react";
import { Goal } from "./";
import { GoalType } from "../types";

interface GoalListProps {
  goals: GoalType[];
  onDeleteGoal: (id: number) => void;
}

const GoalList: FC<GoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul className="grid grid-cols-3 gap-4 mt-8 overflow-y-scroll p-4 h-48">
      {goals.map((goal) => (
        <li>
          <Goal key={goal.title} {...goal} onDeleteGoal={onDeleteGoal} />
        </li>
      ))}
    </ul>
  );
};

export default GoalList;
