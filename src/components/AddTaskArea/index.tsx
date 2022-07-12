import { ChangeEvent, FormEvent, useState } from "react";
import * as C from "./style";

type Props = {
  onSubmit: (title: string, id: number) => void;
};

export const AddTaskArea = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setId(Math.floor(Math.random() * 99999));
    setTitle(e.target.value);
  };

  const handleSubmitTask = (e: FormEvent) => {
    e.preventDefault();
    if (title !== "") {
      onSubmit(title, id);
    }
    setTitle("");
  };

  return (
    <C.Container onSubmit={handleSubmitTask}>
      <input
        className='input-task'
        type='text'
        placeholder='Enter Todo'
        onChange={handleInput}
        value={title}
      />

      <button type='submit'>Add</button>
    </C.Container>
  );
};
