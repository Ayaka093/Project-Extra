import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card key={index} className="flex justify-between items-center p-2">
            <CardContent className="flex-1 cursor-pointer" onClick={() => toggleTask(index)}>
              <span className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</span>
            </CardContent>
            <Button variant="destructive" onClick={() => deleteTask(index)}>
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
