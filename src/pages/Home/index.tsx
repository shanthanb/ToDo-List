import { useEffect, useState } from "react";
import { AddTaskArea } from "../../components/AddTaskArea";
import { Task } from "../../components/Task";
import * as C from "./style";
import { Item } from "../../types/Item";

const Home: React.FC = () => {
  const getTasks = () => {
    const storedValues = localStorage.getItem("tasks");
    if (!storedValues) return [];
    return JSON.parse(storedValues);
  };

  const [tasks, setTasks] = useState<Item[]>(getTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title: string, id: number) => {
    let newTaskList = [...tasks];
    newTaskList.push({
      id: id,
      title: title,
      isCompleted: false,
    });
    setTasks(newTaskList);
  };

  const handleTaskChange = (id: number, isCompleted: boolean) => {
    let newTaskList = [...tasks];
    for (let i in newTaskList) {
      if (newTaskList[i].id === id) {
        newTaskList[i].isCompleted = isCompleted;
      }
    }
    setTasks(newTaskList);
  };

  const handleTaskRemove = (id: number) => {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks(newTaskList);
  };

  return (
    <C.Container>
      <C.Wrapper>
        <C.Title>Todo</C.Title>

        <AddTaskArea onSubmit={handleAddTask} />

        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onChange={handleTaskChange}
            onRemove={handleTaskRemove}
          />
        ))}
      </C.Wrapper>
    </C.Container>
  );
};

export default Home;
