import React from "react";

function CategoryFilter({categories, handleButtonClick, giveClass}) {
  
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return <button onClick={() => handleButtonClick(category)} className={giveClass === category ? 'selected' : " "} key={category}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
