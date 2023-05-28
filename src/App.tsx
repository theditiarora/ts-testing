import { useState } from "react";
import Task from './Task'
type taskProp = {
  id: number,
  work: string,
}

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([
    {
      id: 2,
      work: "code the app",
    },
    {
      id: 1,
      work: "go out"
    }
  ]);

  // const addTask = () => {
  //   const id = Math.floor(Math.random() * 1000) + 1
  //   let newTask: taskProp = {id: id, work: task}

  //   setTasks(newTask, ...tasks)
  // }
  return (
    <>
      <h2>To Do App</h2>
      <input onChange={e => setTask(e.target.value)} value={task} type="text" placeholder="Task" />
      <button>+</button>
        
      {tasks.map(todo => {
          return(
            <Task tasks={todo} />
          )
        })}
    </>
  );
}

export default App;
