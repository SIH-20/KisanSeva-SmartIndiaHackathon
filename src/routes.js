import React, { Component } from "react";
import Loader from 'react-loader-spinner';
import { Route, Switch ,BrowserRouter} from "react-router-dom";
import { setCurrentUser } from "./redux/user/user.actions";
import Auth from "./layouts/login/authComponent.jsx";
import { connect } from "react-redux";
import PrivateRoute from "./views/privateRoute/privateRoutes.jsx";
import {ApolloProvider} from 'react-apollo';
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {ApolloClient} from "apollo-boost";
import Axios from "axios";
const httpLink = new createHttpLink({
  uri: "https://buyfreshdtu.xyz/graph"
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link:httpLink,
  cache
});

class App extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    this.setState({ loading: false });

let token = sessionStorage.getItem("token");
// let token = "1234";

// verify the validity of token
let response  = await Axios.get("https://buyfreshdtu.xyz/api/check-session",{
  headers:{
    "Authorization" :`Bearer ${token}`
  }
});

    if (token && response.status!=402) {
      this.props.setCurrentUser(`Mr.Kisan`);
    }
  }

  render() {
    return this.state.loading === true ? (
      <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} 

   />
    ) : (
      <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" exact key="Login" component={Auth} />
          <PrivateRoute />
        </Switch>
            </BrowserRouter>
            </ApolloProvider>
      
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
