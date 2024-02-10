import React from "react";
import './Home.css'
import house from '../../Images/house.jpg'
import { themeContext } from '..//../Context';
import { useContext } from 'react';
const Homeintr = () =>{
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return(
        <div className="home">
            {/*for leftside */}
        <div className="h-left">
            <div className="h-name">
                <span data-aos="zoom-in-up">Welcome to </span>
                <span>Alpha rent property</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, 
                      mollitia laboriosam eum quaerat voluptas dolorem molestias dignissimos </span>
            </div>
            <button className="h-button">
                To Rent
            </button>
        </div>

    {/* for rightside */}
        <div className="h-right">
            <img className="house" src={house} alt="" />
           
        </div>
        </div>

    )

}
export default Homeintr;