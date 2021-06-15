import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({itemList, removeItem}) {
  // const itemsArray = itemList.map(items =>
  //   <ListingCard key={items.id} {...items} removeItem={removeItem}
  //   />)
// console.log(itemsArray);


  return (
    <main>
      <ul className="cards">
        {/* {itemsArray} */}
        {itemList.map(items => (
          <ListingCard 
          key={items.id} 
          {...items} 
          removeItem={removeItem}
        />
        ))}</ul>
    </main>

  );
}




export default ListingsContainer;


// const plantsArray = itemList.map(plants => {
//   <ListingCard 
//   key={itemList.id} 
//   description={itemList.description} 
//   image={itemList.image} 
//   location={itemList.location} 
//   />