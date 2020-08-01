import React , {useState} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import PanelHeader from "../../layouts/PanelHeader/PanelHeader"
import { connect } from "react-redux";
import Example from "./new";
const Analytics = React.memo(props => {
  return (
    <div>
         {/* {
          show === true ? <Backdrop show={show} close={modalClose}/>:null
        } */}
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card style={{ height: "max-content" }}>
              <CardHeader>
                <CardTitle tag="h5">Business Analytics</CardTitle>
              </CardHeader>
              <CardBody>
              <Example/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

      {/* <Transition
          mountOnEnter
          unmountOnExit
          in={show}
          timeout={200}
        >
          {(state) => (<Request  show={state} close={modalClose} />)}
        </Transition> */}


    </div>
  );

});
const mapStateToProps = state => ({
  crop: state.crop.selectedCrop,
  category: state.crop.cropQuality
});
export default connect(mapStateToProps)(Analytics);
