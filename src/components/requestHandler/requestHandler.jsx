import React ,{useState} from "react";
import { Button } from "@material-ui/core"
import Loader from "react-loader-spinner";
import Axios from "axios";
import { gql } from 'apollo-boost';
import "./requestHandler.css"; 
import { useQuery } from '@apollo/react-hooks';
import {withRouter} from "react-router-dom";
const FARMERS_QUERY = gql`
query($id:ID!){
  request(id:$id){
   content
}
}
` 
const request = (props) => {

    const { data, error, loading } = useQuery(FARMERS_QUERY, {
        variables: {id:props.requestId}
      });
    const submitHandler = async (action)=>{
        let response = await Axios.post("https://buyfreshdtu.xyz/api/handle-request",{
            action:action,
            requestId:props.requestId
      
        });
        props.close();
        props.history.push("/requests");
    }
    const style = {
        display: props.show === "exiting" || props.show === "exited" || props.show === "entering" ? "none" : "block"
    }
    const buttonStyle = {
        display: props.show === "exiting" || props.show === "exited" || props.show === "entering" ? "none" : "flex",
        position: "relative", top: "0.7rem", left: "24rem",justifyContent:"space-between",width:"32%"

    }
    let classes;
    if (props.show === 'entering') {
        classes = 'Request Request-show'
    } else if (props.show === 'exiting') {
        classes = 'Request-hide Request'
    } else {
        classes = "Request";
    }
if(error){
    console.log(error);
    return (<p>Error.........</p>);
}

if(loading){
    return(<div style={{ position: "relative", top: "17vh", left: "30vw", height: "404px", width: "40%" }}>
<Loader type="Rings"
  color="blue"
  height={100}
  width={100}
  timeout={3000} /></div>)
}

    return (
        <div className={classes}>


            <textarea value={data.request.content} readOnly style={style} className="text-container" rows={10} cols={62} />
            <div style={buttonStyle}>
                <Button onClick={()=>{submitHandler("accept")}} variant="contained" color="primary">Accept</Button>
                <Button onClick={()=>{submitHandler("reject")}} variant="contained" color="secondary">
                    Reject
                </Button>
            </div>
        </div>
    )
}

export default withRouter(request);