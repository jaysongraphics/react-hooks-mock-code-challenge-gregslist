import React from "react";
import {useState} from "react"

function ListingCard(items) {
  const {description, image, location, id, removeItem} = items
  const [favorite, setFavorite] = useState(false)
  // console.log(items);

function handleFavorite(){
  setFavorite(favorite => !favorite)
}
// console.log(favorite);

const handleDelete = () =>{
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE", 
})
    removeItem(id);
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
          {favorite ? 
          (<button onClick={handleFavorite} 
            className="emoji-button favorite active">★</button>) : 
          (<button onClick={handleFavorite} 
          className="emoji-button favorite">☆</button>)
          }
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} 
           className="emoji-button delete">🗑
        </button>
      </div>
    </li>
  );
}

{/* <button onClick={handleFavorite} className="emoji-button favorite active">★</button> */}



export default ListingCard;
