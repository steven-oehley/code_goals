import { type FC } from "react";

import { GoalProps } from "../types";

const Goal: FC<GoalProps> = ({ title, description, id, onDeleteGoal }) => {
  return (
    <article className="bg-sky-900 p-4 ring-2 ring-sky-300">
      <div className="text-sky-300">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button className="btn" onClick={() => onDeleteGoal(id)}>
        Delete
      </button>
    </article>
  );
};
export default Goal;
