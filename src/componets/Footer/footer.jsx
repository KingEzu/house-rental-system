import React from "react";
import './footer.css'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>             
                <a href="/">
                  <i className="fa-brands fa-facebook-square">A</i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-facebook-square">B</i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-facebook-square">C</i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-facebook-square">D</i>
                </a>

                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4> Pro</h4> 
                    <a href="/"></a>
                </div>
                <div>
                    <h4> Pro</h4>
                    <a href="/"></a>
                </div>
                <div>
                    <h4> Pro</h4>
                    <a href="/"></a>
                </div>
                <div>
                    <h4> Pro</h4>
                    <a href="/"></a>
                </div>
            </div>
        </div>
        

    );
}
export default Footer;