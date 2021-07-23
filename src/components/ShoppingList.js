import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    category: "Produce",
  })

  console.log(newItem)
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  let itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  itemsToDisplay.push(newItem)
  
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
    console.log(tempNewItem)
    setNewItem(tempNewItem)
  }
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} newItem = {newItem}/>
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
