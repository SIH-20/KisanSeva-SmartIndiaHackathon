import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Input,
  Label,
  Button
} from "reactstrap";
import React,{useState} from 'react';

const toast=(props)=> {
return(
 <div>
    <Row>
  <Col md={4} xs={4}>
  <Card>
         
            <CardBody>
              <h5>{props.header}</h5>
              <br/>
              {props.body}
              </CardBody>
              </Card>
  </Col>
  </Row>
 </div>
);
}
export default toast;

