import React, { useState } from "react";
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
import {Bajra,Barley,Jowar,Maize,Wheat} from "./component";
const Analytics = React.memo(props => {
    return (
        <div>

            <PanelHeader size="sm" />
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card style={{ height: "max-content" }}>
                            <CardHeader>
                                <CardTitle tag="h5">Predictions</CardTitle>
                            </CardHeader>
                            <CardBody style={{height:"832px"}}>
                               
                                  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                            
                                          <div style={{height:"237px",width:"425px",marginBottom:"31px"}}>
                                              <Bajra/>
                                              <p style={{textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"17px"}}>Bajra</p>
                                          </div>
                                   
                                          <div style={{height:"237px",width:"425px"}}>
                                              <Barley/>
                                              <p style={{textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"17px"}}>Barley</p>
                                          </div>

                                          <div style={{height:"237px",width:"425px",marginBottom:"31px"}}>
                                              <Jowar/>
                                              <p style={{textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"17px"}}>Jowar</p>
                                          </div>

                                          <div style={{height:"237px",width:"425px"}}>
                                              <Maize/>
                                              <p style={{textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"17px"}}>Maize</p>
                                          </div>

                                          <div style={{height:"237px",width:"425px",marginBottom:"31px"}}>
                                              <Wheat/>
                                              <p style={{textAlign:"center",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"17px"}}>Wheat</p>
                                          </div>
                             
                                  </div>
                         
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>



        </div>
    );

});
const mapStateToProps = state => ({
    crop: state.crop.selectedCrop,
    category: state.crop.cropQuality
});
export default connect(mapStateToProps)(Analytics);
