import Task from "./Task"
//import React, {useState} from 'react';

function TaskList({taskArray, handleDelete}) {
  // const [taskArray, setTaskArray] = useState(tasks)

  // function handleDelete(text) {
  //   let newArray = taskArray.filter((task) => task.text !== text
  //   )
  //   setTaskArray(newArray)
  // }

  return (
    <div className="tasks">
      {taskArray.map(task => {
        return <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />
      })
      }
    </div>
  );
}

export default TaskList;
