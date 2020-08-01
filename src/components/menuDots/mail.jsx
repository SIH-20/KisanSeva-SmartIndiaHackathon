import React ,{useState} from "react";
import { Button } from "@material-ui/core"
import axios from "axios"
import "./mail.css"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux";
const mailer = (props) => {
    console.log(props);
    const [value,setValue] = useState("");
    const submitHandler = async (e)=>{
       try {
           let token = sessionStorage.getItem("token");
        let response = await axios.post("https://buyfreshdtu.xyz/api/take-action",{
            
            action:props.type,
            number:props.number,
            actionMessage:value,
            crop:props.crop,
            category:props.category
        },{
            headers:{
                "Authorization" :`Bearer ${token}`
              },
        });
        console.log(response.data);
         props.close();
         props.history.push("/farmer-feedback");
       } catch (error) {
           
       }
    }
    const style = {
        display: props.show === "exiting" || props.show === "exited" || props.show === "entering" ? "none" : "block"
    }
    const buttonStyle = {
        display: props.show === "exiting" || props.show === "exited" || props.show === "entering" ? "none" : "block",
        position: "relative", top: "0.7rem", left: "32rem"

    }
    let classes;
    if (props.show === 'entering') {
        classes = 'mailer mailer-show'
    } else if (props.show === 'exiting') {
        classes = 'mailer-hide mailer'
    } else {
        classes = "mailer";
    }

    return (
        <div className={classes}>


            <textarea style={style} onChange={(event)=>setValue(event.target.value)} className="text-container" rows={10} cols={62} />
            <div style={buttonStyle}>
                <Button onClick={submitHandler} variant="contained" color="secondary">
                    Send
                </Button>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    crop: state.crop.selectedCrop,
    category: state.crop.cropQuality
  });
export default connect(mapStateToProps)(withRouter(mailer));