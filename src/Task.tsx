type taskProp = {
  tasks: {
    id: number,
    work: string,
  }
  
}

export default function Task(tasks: taskProp) {
  console.log(tasks);
  
  return (
    <div>
      <div className="task">
       <p>- {tasks.tasks.work}</p>
       <button>delete</button>
      </div>
    </div>
  )
}
