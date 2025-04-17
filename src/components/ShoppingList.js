import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [ShoppingItems, setShoppingItems] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = ShoppingItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });
  function handleSearchChange(event){
    setSearchText(event.target.value);

   }
   function onItemFormSubmit(item){
    setShoppingItems((prevItems) => [...prevItems, item]);
   }
 
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
      {itemsToDisplay
          .filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())) // Filter items based on search text
          .map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
