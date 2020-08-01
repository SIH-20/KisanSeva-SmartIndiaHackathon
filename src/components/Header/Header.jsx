import React from "react";
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux';
import {setCurrentUser} from "../../redux/user/user.actions"
import {selectCropType,selectCropQuality} from "../../redux/crop/crop.action"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
import Autocomplete from "react-autocomplete";
import { ToastContainer} from "react-toastify";
import dashboardRoutes from "routes/dashboard.jsx";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
      crop: "",
      category: "",
      role: "",
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "white"
      });
    }
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  openSidebar() {
    console.log('appe');
    document.documentElement.classList.toggle("nav-open");
    this.refs.sidebarToggle.classList.toggle("toggled");
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "white"
      });
    } else {
      this.setState({
        color: "transparent"
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
    
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.refs.sidebarToggle.classList.toggle("toggled");
    }
  }
  logout() {
  this.props.logout();
  sessionStorage.clear();
  this.props.history.push("/auth");
  }

  render() {
    return (
      
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "white"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
            (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
       
      >
        <ToastContainer></ToastContainer>
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref="sidebarToggle"
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
          </div>
          <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>

          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-end"
          >
            <form>
              <Autocomplete
                getItemValue={item => item}
                items={[
                  "raagi",
                  "rice",
                  "wheat",
                  "maize",
                  "all"
                ]}
                shouldItemRender={(item, value) =>
                  item.slice(0, value.length).toLowerCase() ===
                  value.toLowerCase()
                }
                renderItem={(item, isHighlighted) => {
                  return (
                    <div className="form-control" style={{ align:"center",fontSize: "14px", borderRadius: "0", background: "rgba(255,255,255,1)", color: "black" }}>
                      {item}
                    </div>
                  );
                }}
                value={this.state.crop}
                onChange={e => this.setState({ crop: e.target.value })}
                onSelect={val => {
                  this.setState({ crop: val });
                  this.props.selectCrop(val);
                }}
                wrapperProps={{
                  className: "no-border input-group",
                  style: { align:"center"}
                }}
                inputProps={{
                  className: "form-control",
                  placeholder: "Select the crop",
                  style: { marginBottom: "5px", borderRadius: "30px",align:"center" }
                }}
              />
              </form>
              <form>
                <Autocomplete
                getItemValue={item => item}
                items={[
                  "premium",
                  "elite",
                  "classic",
                  "all"
                ]}
                shouldItemRender={(item, value) =>
                  item.slice(0, value.length).toLowerCase() ===
                  value.toLowerCase()
                }
                renderItem={(item, isHighlighted) => {
                  return (
                    <div className="form-control" style={{ align:"center",fontSize: "14px", borderRadius: "0", background: "rgba(255,255,255,1)", color: "black" }}>
                      {item}
                    </div>
                  );
                }}
                value={this.state.category}
                onChange={e =>{this.setState({ category: e.target.value })}}
                onSelect={val => {

                  this.setState({ category: val });
                  this.props.cropQuality(val);
                }}
                wrapperProps={{
                  className: "no-border input-group",
                  style: { align:"center"}
                }}
                inputProps={{
                  className: "form-control",
                  placeholder: "Select crop category",
                  style: { marginBottom: "5px", borderRadius: "30px",align:"center" }
                }}
              />
            </form>

            <Nav navbar>

              <Dropdown
                nav
                isOpen={this.state.dropdownOpen}
                toggle={e => this.dropdownToggle(e)}
              >

                <DropdownToggle caret nav>
                  <i className="now-ui-icons users_single-02" />
                  <p>
                    <span className="d-lg-none d-md-block">User</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu right>

                  <DropdownItem onClick={() => this.logout()} tag="a">
                    Log out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

            </Nav>

          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  selectCrop : (crop)=>dispatch(selectCropType(crop)),
  cropQuality:(category)=>dispatch(selectCropQuality(category)),
  logout:()=>dispatch(setCurrentUser(null))
});
export default connect(null,mapDispatchToProps)(withRouter(Header));
