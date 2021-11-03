import React from "react";

function NewTaskForm({categories, handleFormSubmit, formText, formCategory, handleTextChange, handleCategoryChange}) {
  return (
    <form onSubmit={handleFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleTextChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category">
          {categories.map((category) => {
            if (category !== "All"){
              return <option key={category}> {category} </option>}
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
