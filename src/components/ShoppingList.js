import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, callBack}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  // const [newItem, setNewItem] = useState({
  //   id: '',
  //   name: ,
  //   category: "Produce",
  // })

  // if(newItem.id){
    
  // }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  
  function onSearchChange(searchValue){
    setSearch(searchValue)
  }

  itemsToDisplay = items.filter((item) => {
    if(item.name.toLowerCase().includes(search.toLowerCase())){
      return true;
    } else {
      return false;
    }
  })

  function onItemFormSubmit(tempNewItem){
  
    callBack(tempNewItem)
  }
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange = {onSearchChange} search = {search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
