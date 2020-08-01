import React ,{useState} from "react";
import {Row, Col } from "reactstrap";
import { connect } from "react-redux"
import Loader from "react-loader-spinner";
import "./userpage.css";
import {Table} from "react-bootstrap";
import {Transition} from "react-transition-group"
import Menu from "../../components/menuDots/menu.jsx";
import Backdrop from "../../components/UI/Backdrop/Backdrop.jsx";
import Mailer from "../../components/menuDots/mail.jsx";
import FarmerChart from '../../components/charts/farmersChart';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
const FARMER_QUERY = gql`
query($id:ID!,$crop:String!,$category:String!){
  complaint(id:$id,crop:$crop,category:$category){
    farmer{
      name
      phone
    }
    production{
      y
      label
    }
    complaints
    warnings
  }
}
`;
const User = (props)=>{
  console.log(props);
 const [show,setShow]=useState(false);
 const [action,setAction]=useState(null);
 const { data, error, loading } = useQuery(FARMER_QUERY, {
  variables: {id:props.farmerId,crop: props.crop, category: props.category }
});
 const  modalClose= ()=>{
    setShow(false);
  }
 const  modalOpen = (type)=>{
    console.log(props)
   setShow(true);
   setAction(type)
  }
if(error){
  console.log(error);
}
console.log(data);
    return (
      <div>
      
        {
          show === true ? <Backdrop show={show} close={modalClose}/>:null
        }
        <div className="content">
        {
              loading ?
              <div style={{ position: "relative", top: "17vh", left: "30vw", height: "404px", width: "40%" }}>
                <Loader type="Rings"
                  color="blue"
                  height={100}
                  width={100}
                  timeout={3000} />
              </div>:<Row>
            
            <Col md={5} xs={12}>
              <div className="card-container">


                <div className = "profile-info">

                  <img alt="profile" className="profile-image" src={require("../../assets/img/farmer.png")} />
                  <div className = "profile-details">
                    <span>
        <b>Name: </b><i>{`${data.complaint.farmer.name}`}</i>
                    </span>
                  <br/>
                    <span>
                      <b>Age: </b><i>42</i>

                    </span>
                    
                    <br />
                    <span>
                      <b>District: </b><i>Dehradun</i>

                    </span>

                  </div>
                </div>
                <div className = "chart-container" >
        <h4>PRODUCES</h4>

                  <FarmerChart data={data.complaint.production} />
                </div>


              </div>
            </Col >
            <Col md={7} xs={12}>
              <h4 style={{marginTop:"1.1rem",paddingLeft:"9rem",display:"inline"}}>Complaints</h4>
              <Menu open={modalOpen} warnings={data.complaint.warnings}/>
            <Table className="table-width" striped={true} borderless={true} responsive="md" style={{overflowX:'hidden'}}>
                    <thead className="text-primary">
                      <tr style={{textAlign:'center'}}>
                      </tr>
                    </thead>
                    <tbody>
                  {
                    data.complaint.complaints.map((c,index)=>{
                      return(<tr key={index}>
                        <td>{c}</td>
                      </tr>)
                    })
                  }
                    </tbody>
                  </Table>
            </Col>

          </Row>
            }
          
        </div>
      {
        loading ?null:<Transition
        mountOnEnter
        unmountOnExit
        in={show}
        timeout={200}
      >
        {(state) => (<Mailer type={action} number={data.complaint.farmer.phone} show={state} close={modalClose} />)}
      </Transition>
      }
      </div>
    );
  
}
const mapStateToProps = state => ({
  crop: state.crop.selectedCrop,
  category: state.crop.cropQuality
});
export default connect(mapStateToProps)(User);
