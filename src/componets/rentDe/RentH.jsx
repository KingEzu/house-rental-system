import React, { useState } from "react";
import "./Renthouse.css"
import  eghouse  from'../../Images/Ezana.JPG'
import { FaHeart } from "react-icons/fa";

const Rent = () =>{
    // Declare a state variable called favorite
    const [favorite, setFavorite] = useState(false);

    // Define a function to handle the click event
    const handleClick = () => {
        // Toggle the favorite state
        setFavorite(!favorite);
    };

    return(
        <div class="rent-container">
                <div className="Re-card">
                    <div className="Re-img">
                        <img src={ eghouse } />

                    </div>
                    <div className="content-describe">
                    <h1 className="NameHouse">shared room,Jemo</h1>
                    {/* Use conditional rendering to change the color of the heart */}
                    <span class="heart" onClick={handleClick}>{favorite ? <span style={{color: "red"}}><FaHeart />  </span> : <span style={{color: "black"}}>    <FaHeart />   </span>}</span>
                   
                    </div>
                 
                  

                </div>
        </div>
    );
}
export default Rent;
