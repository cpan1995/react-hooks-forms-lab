import React , {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, newItem}) {

  const [tempnewItem, settempNewItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  })

  function handleSubmit(e){
    e.preventDefault();
    let tempNewItem = newItem
    tempNewItem.id = uuid();
    tempNewItem.name = e.target.name.value;
    // newItem.id = uuid();
    // newItem.category = e.target.category.value
    // newItem.name = e.target.name.value
    onItemFormSubmit(tempNewItem)
  }


  function handlesCategory(e){
    tempnewItem.category = e.target.value
    settempNewItem(tempnewItem)
  }

  function handlesName(e){
    tempnewItem.name = e.target.value
    settempNewItem(tempnewItem)
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" onChange = {handlesName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange = {handlesCategory} value ={newItem.category}>
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