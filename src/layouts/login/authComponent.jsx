import React from "react";
import { Switch, Route } from "react-router-dom";
// import Login from "./login-ab";
import Login from "./login-ab.jsx";
import withRouter from "react-router-dom/withRouter";
import { connect } from "react-redux";
const AuthComponent = props => {
    console.log(props);
    if (props.currentUser != null) {
        props.history.push('/');
    }
    return (
        <Switch>
            <Route path="/auth" exact component={() => {
                return (
                    <Login />
                )
            }} />

        </Switch>
    );
}

//state is the rootReducer
const mapStatestoProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStatestoProps)(withRouter(AuthComponent));