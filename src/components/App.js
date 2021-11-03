import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskArray, setTaskArray] = useState(TASKS)
  const [giveClass, setGiveClass] = useState('')
  const [formText, setFormText] = useState('')
  const [formCategory, setFormCategory] = useState('Code')

  function handleDelete(text) {
    let newArray = taskArray.filter((task) => task.text !== text
    )
    setTaskArray(newArray)
  }

  function handleButtonClick(category) {
    let newArray = TASKS.filter((task) =>{ 
      if (category !== "All"){
        return task.category === category}
      else {
        return task
      }
      })
    setTaskArray(newArray)
    setGiveClass(category)
  }

  function handleTextChange(event) {
    setFormText(event.target.value)
  }

  function handleCategoryChange(event) {
    setFormCategory(event.target.value)
    checkForCurse(formText)
  }

  function isUpper(str) {
    return /[A-Z]/.test(str);
}

  function handleFormSubmit(event) {
    event.preventDefault()
    if (formText.length > 1 && isUpper(formText)){
      const formData = {
        text: formText,
        category: formCategory}
        let newArray = [...taskArray, formData];
        setTaskArray(newArray)
        setFormCategory("Code")
        setFormText("")
    } else {
      alert("No can do Bucko!")
    }
    }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      handleButtonClick={handleButtonClick}
      giveClass={giveClass} />
      
      <NewTaskForm 
      categories={CATEGORIES}
      handleFormSubmit={handleFormSubmit}
      handleCategoryChange={handleCategoryChange}
      handleTextChange={handleTextChange} />

      <TaskList
      tasks={TASKS}
      taskArray={taskArray}
      handleDelete={handleDelete}
      formText={formText}
      formCategory={formCategory} />
      
    </div>
  );
  
}

export default App;
