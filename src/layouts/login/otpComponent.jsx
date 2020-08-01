import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import "./otp.css";

import Axios from "axios";
import { setCurrentUser } from "../../redux/user/user.actions"
import { connect } from 'react-redux';


const otpComponent = (props) => {
   
    const [otp, setOtp] = useState("");
    const [findErr, setErr] = useState(null);
    const [focus, setFocus] = useState(false);

    const submitHandler = async (e) => {
        try {

            e.preventDefault();
            if (otp == "" || parseInt(otp, 10) == NaN || otp.length !==4) {

                setErr("Enter a valid otp");
                return;
            }
            let response = await Axios.post("https://buyfreshdtu.xyz/api/submit-otp", {
                phone: props.phone,
                otp: otp
            });
            console.log(response);
            if (response.status == 200) {
                sessionStorage.setItem("token", response.data.data.token);
                props.setCurrentUser(`${response.data.data.first_name} ${response.data.data.last_name}`);
                props.history.push("/");
                return;

            } else {

                setErr("otp is wrong");
                return;
            }
        } catch (error) {
                throw error;
        }


    }
    return (
        <div className="contact-form">

            <h2>OTP</h2>
            <img className="uttrakhand" src={require('../../assets/img/2.png')} />
            <br />

            <form onSubmit={(e) => {
                submitHandler(e);
            }}>
                <label className={focus == true ? "shrink" : ""}>OTP</label>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <input onFocus={() => setFocus(true)} onChange={(e) => setOtp(e.target.value)} type="text" />
                </div>


                <input type="submit" name="" value="Submit" />

            </form>
            <div>
                {
                    findErr !== null ? <p style={{ color: "red" }}>{findErr}</p> : null
                }
            </div>

        </div>
    );
}
//set current user returns an action object that we are dispatching
//thus we are dispatching basically an object
const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(withRouter(otpComponent));