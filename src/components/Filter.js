import React, {useState} from "react";

function Filter({ onCategoryChange, onSearchChange,search }) {
 
  function searchFunctionCallback(e){
    onSearchChange(e.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" name="search" placeholder={"Search..."} onChange={searchFunctionCallback} value={search}/>
      <select name="filter" onChange={onCategoryChange} type="submit">
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
