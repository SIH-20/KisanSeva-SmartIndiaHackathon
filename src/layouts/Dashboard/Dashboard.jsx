import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { Header, Footer, Sidebar } from "components";
import dashboardRoutes from "routes/dashboard.jsx";
import "react-chat-widget/lib/styles.css";
var ps;
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: "",
      stateselected: "",
      role: "",
      dataselected: ""
    };
  }
  changestate(value) {
    this.setState({
      stateselected: value
    });
    console.log(value);
  }
  changestate1(value) {
    this.setState({
      dataselected: value
    });
    console.log('c', value);
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
    // addResponseMessage("Welcome, How can i help you?");
  //   getcurrentuser().then((snapshot) => {
  //     console.log("p", snapshot);
  //     this.setState({
  //       user: snapshot.key,
  //       role: snapshot.val().role
  //     });
  //     console.log("role", snapshot.val().role);
  //     askForPermissionToReceiveNotifications();
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  // handleNewUserMessage = newMessage => {
  //   console.log(`New message incoming! ${newMessage}`);
  //   if (this.state.count == 0) {
  //     setTimeout(() => {
  //       addResponseMessage(
  //         "Your message has been recorded!Soon a executive will come to help you"
  //       );
  //       this.setState({
  //         count: 1
  //       });
  //     }, 1000);
  //   }
  //   fire
  //     .database()
  //     .ref("chats")
  //     .push({
  //       user: this.state.user,
  //       chat: newMessage
  //     });
  // };
  render() {
    const routes = (dashboardRoutes.map((prop, key) => {
      
      if (prop.redirect)
        return (
          <Redirect from={prop.path} to={prop.pathTo} key={key} />
        );
      return (
        <Route
          path={prop.path}
          component={prop.component}
          key={key}
        />
      );

    }));
  
    return (
      <div className="wrapper" >
        <Sidebar {...this.props} routes={dashboardRoutes} />
        <div className="main-panel" ref="mainPanel" style={{backgroundImage:" linear-gradient(to right, #bdc3c7 , #2c3e50)"}}>
          <Header {...this.props}  />
          <Switch>
          
          {routes}
           
            
          </Switch>
          <Footer fluid />
        </div>
      </div>
    );
  }
}

export default Dashboard;
