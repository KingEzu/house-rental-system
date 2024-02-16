import React from "react";
import "./backtop.css"
import { useEffect, useState } from "react";
function BackToTopButton(){
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() =>{
       window.addEventListener("scroll", () =>{
        if(window.scrollY > 100) {
            setBackToTopButton(true)
        }else{
            setBackToTopButton(false)
        }
       }) 
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        })
    }
    return <div className="App">
        {BackToTopButton && (
            <button className="Buttonbacktotop" onClick={scrollUp}>^</button>

        )}
    </div>
}export default BackToTopButton;