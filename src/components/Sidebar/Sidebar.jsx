import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import image from "../../assets/css/grass.jpeg";
import './sidebar.css';
import { withRouter } from "react-router-dom";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: "Abhinav Gautam"
    }
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }

  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }

  }
  render() {
    return (
      <div className="sidebar"
        data-image={image}>
        <div className="logo">

          <div
            href="https://www.creative-tim.com"
            className="simple-text logo-normal"
            style={{ marginLeft: "30px" }}
          >
            {this.state.user}
          </div>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {this.props.routes.map((prop, key) => {
              if(prop.redirect || prop.name === "user"){
                return null;

              }
              return (
                <li
                className={
                  this.activeRoute(prop.path) +
                  (prop.pro ? " active active-pro" : "")
                }
                key={key}
              >
                  <NavLink
                    to={prop.path}
                    className="link"
                    activeClassName="new-active"
                  >
                    <i className={"now-ui-icons " + prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
               
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
