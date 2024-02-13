import React from "react";
import { Component } from "react";
import './Navbar.css'
import Toggle from "./toggle/Toggle"
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

const Navlinks =[
    {
    title: "Home",
    url: "/",



},
{
    title: "Service",
    url: "/Service",

},
{
    title: "Rent",
    url: "/Rent",



},
{
    title: "Contact us",
    url: "/contact"
    

},

]
const navlink1 =[
    {
        title: "Login",
        url: "/Login",
      
    },
]
class Navbar extends Component{


render(){
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">ALPHA</div>
                <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        {Navlinks.map((Navlinks, index) =>{
                            return(
                                <li key={index}>
                                    <Link  to={Navlinks.url}>{Navlinks.title}</Link>
                                </li>

                            );
                        })}
             
                        
                    </ul>
                </div>

               
                <div className="button">
                    {navlink1.map((navlink1, index)=>{
                        return(
                            <Link to={navlink1.url} className="button2">{navlink1.title}</Link>
                        );
                    }
                    )}
                </div>
            </div>
        </div>
        
        );
  
}}
export default Navbar;