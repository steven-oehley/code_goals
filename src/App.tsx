import { FC, useState } from "react";

import headerImg from "./assets/headerImg.jpg";

import { Form, GoalList, Header } from "./components";

import { GoalType } from "./types";

const App: FC = () => {
  const [goals, setGoals] = useState<GoalType[]>([]);

  const handleAddGoal = (title: string, desc: string): void => {
    const newGoal: GoalType = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      description: desc,
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (id: number): void => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main className=" w-1/2 mx-auto ring-2 ring-white bg-slate-900 text-white p-6">
      <Header image={headerImg} alt="laptop with code">
        <h1 className="text-center text-4xl">My Learning Goals</h1>
      </Header>
      <Form onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
};
export default App;
