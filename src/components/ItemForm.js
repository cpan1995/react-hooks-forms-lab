import React , {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  let tempNewItem = 
  {
    id: uuid(),
    category: "Dessert",
    name: "Ice Cream",
  }

  function handleSubmit(e){
    e.preventDefault();
    //tempNewItem = newItem
    tempNewItem.id = uuid()
    tempNewItem.category = e.target.category.value
    tempNewItem.name = e.target.name.value;
    onItemFormSubmit(tempNewItem)
  }


  // function handlesCategory(e){
    
  //   tempnewItem.category = e.target.value
  //   settempNewItem(tempnewItem)
  // }

  // function handlesName(e){
  //   tempnewItem.name = e.target.value
  //   settempNewItem(tempnewItem)
  // }
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name"/>
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;