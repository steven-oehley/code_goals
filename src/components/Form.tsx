import { FC, useState, useRef } from "react";

interface FormProps {
  onAddGoal: (title: string, description: string) => void;
}

const Form: FC<FormProps> = ({ onAddGoal }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const titleRef = useRef<HTMLInputElement>(null);

  const submitGoal = () => {
    onAddGoal(title, desc);
    setTitle("");
    setDesc("");
    titleRef.current?.focus();
  };

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          placeholder="Enter name of your goal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="inpt"
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="Enter short description...."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="inpt"
        />
      </div>
      <button className="btn" onClick={submitGoal}>
        Add Goal
      </button>
    </>
  );
};
export default Form;
