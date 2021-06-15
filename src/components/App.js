import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import {useEffect, useState} from "react"

function App() {
  const ListUrl = 'http://localhost:6001/listings'
  const [itemsImages, setItemsImages]= useState([]);
  const [search, setSearch] = useState("")
  const [itemsList, setitemsList] = useState(false)
  
  useEffect(() => {
  fetch(ListUrl)
  .then(res => res.json())
  .then(data => setItemsImages(data))
  }, [])


const removeItem = (id) =>{
  const filterArray = itemsImages.filter(product => product.id !== id)
   setItemsImages(filterArray)
}

const sortItems = () =>{
  setitemsList(itemsList => !itemsList)
}

const displayListing = itemsImages.filter(item => {
  return(item.description.toLowerCase().includes(search.toLowerCase()))
})

const sortedList = () =>{
  if (itemsList){
  return displayListing.sort((list1, list2) => list1.location.localeCompare(list2.location))
} else {
  return displayListing
}}

  return (
    <div className="app">
      <Header 
        search={search}
        setSearch={setSearch}
        sortItems={sortItems}
        />
      <ListingsContainer 
        itemList={sortedList()}
        removeItem={removeItem}
        />
    </div>
  );
}

export default App;
