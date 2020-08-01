import React from 'react';
import {Route,withRouter} from 'react-router-dom';
import Dashboard from "../../layouts/Dashboard/Dashboard.jsx";
import { connect } from "react-redux";

const privateRoute = (props)=>{
if(props.currentUser == null){
    
    props.history.push("/auth");
}
    return (
     
           <Route key="Home"  path = "/" render={(props)=>{
               return <Dashboard {...props} />
           }}/>
      
      
        

       
    );
}
const mapStateToProps = state =>({
    currentUser : state.user.currentUser
});
export default connect(mapStateToProps)(withRouter(privateRoute));