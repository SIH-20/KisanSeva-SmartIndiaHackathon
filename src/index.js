import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
// import ApolloClient from "apollo-boost";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/now-ui-dashboard.css";
import "./assets/css/demo.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./routes";

//provider gives us the access to the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
