import React from "react";
import './form.css'

const Form = ()=>{
    function switchForm(formId) {
        document.querySelectorAll('.form').forEach(form => form.classList.remove('active'));
        document.getElementById(formId).classList.add('active');
    }
      
    return(
        <div className="maincontainer">
        <div className="container">
            <div id="loginForm" className="form active">
                <h2>Login</h2>
                <form action="#" method="Post">
                <label htmlFor="" className="label-form">Email*</label>
                    <input type="email" placeholder="Email" className="input-email" id="input-form" />
                    <label htmlFor=""className="label-form">Password*</label>
                    <input type="password" placeholder="Password" className="input-password" id="input-form"/>
                </form>
                
                <button className="button-form">Login</button>
                <p className="forg-pas">to <a href="#">forget password</a></p>
                <p>Don't have an account? <a className="si" href="#" onClick={() => switchForm('signupForm')}>Sign up</a></p>
            </div>
            <div id="signupForm" className="form">
                <h2>Sign Up</h2>
                <form action="#" method="Post">
                    <label htmlFor=""className="label-form">full name*</label>
                    <input type="text" placeholder="Full Name" className="input-name" id="input-form" />             
                    <label htmlFor=""className="label-form">Email*</label>
                    <input type="email" placeholder="Email" className="input-email" id="input-form"/>
                    <label htmlFor=""className="label-form">Password*</label>
                    <input type="password" placeholder="Password" className="input-password" id="input-form" />
                    <label htmlFor=""className="label-form">CONFIRM Password*</label>
                    <input type="password" placeholder="Confirm Password" className="input-conpassword" id="input-form" />
                </form>
                
                
                <button className="button-form">Sign Up</button>
                <p>Already have an account? <a className="si" href="#" onClick={() => switchForm('loginForm')}>Login</a></p>
            </div>
          
    
        </div>
        <div className="line-break">
               
            </div>
        <div className="Logo">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quod obcaecati omnis? Porro quidem totam magnam quas quia labore dolores dicta, ab, magni, exercitationem soluta facilis laudantium. Incidunt, excepturi ea.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit tempore dignissimos ab repudiandae id! Quisquam eveniet similique vitae aut neque, totam fugit repellat tenetur, odio adipisci ex rerum voluptates soluta!
                </p>
            </div>
        </div>
     
    );
}
export default Form;
