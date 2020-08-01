import React, { useState } from 'react';
import Axios from 'axios';
import "./loginab.css";
import { Link } from 'react-router-dom';
import SignUp from "./signupComponent";
import Otp from "./otpComponent.jsx";
import Na from '../../canvasjs.min';
import withRouter from 'react-router-dom/withRouter';
const loginComponent = (props) => {
    console.log(props);
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(false);
    const [focus, setFocus] = useState(false);
    const [findErr, setErr] = useState(null);

    const submitHandler = async (e) => {
try {
    e.preventDefault();

    if(phone == "" || parseInt(phone) == NaN || phone.length !==10){
    
        setErr("Enter a valid Number");
        return;
    }
    let response = await Axios.post("https://buyfreshdtu.xyz/api/submit-number",{
        phone:phone
    });
    console.log(response);
    if(response.status == 200){
        setOtp(true);
        return;
    }else{
        setErr("Enter a registered number");
        return;
    }
} catch (error) {
    throw error;
}        
    }

    return (
        <React.Fragment>
            {
                otp == false ? <div className="contact-form">

                    <h2>Login</h2>
                    <img className="uttrakhand" src={require('../../assets/img/2.png')} />
                    <br />

                    <form onSubmit={(e) => { submitHandler(e) }}>
                        <label className={focus == true ? "shrink" : ""}>Phone Number</label>
                        <input onFocus={() => setFocus(true)} onChange={(e)=>{
                            setPhone(e.target.value);
                        }} type="text" name="" />


                        <input type="submit"  name="" value="Sign In" />

                    </form>
                    <div>
                        {
                            findErr !== null ? <p style={{ color: "red" }}>{findErr}</p> : null
                        }
                    </div>
                   
                </div> : <Otp phone={phone} />
            }


        </React.Fragment>
    );
}
export default withRouter(loginComponent);