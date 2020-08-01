import React, { useState } from 'react';
import "./loginab.css";
const signupComponent = (props) => {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");


    return (
        <div className="contact-form">

            <h2>Sign Up</h2>
            <img className="uttrakhand" src={require('../../assets/img/2.png')} />
            <br />

            <form>
                <p>Name</p>

                <input type="text" name="" placeholder="Enter name" />

                <p>Phone Number</p>
                <input type="text" name="" placeholder="Enter phone number" />


                <input type="submit" name="" value="Sign Up" />

            </form>
        </div>
    );
}
export default signupComponent;