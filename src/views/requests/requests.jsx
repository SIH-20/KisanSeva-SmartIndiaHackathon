import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { Transition } from "react-transition-group"

import Request from "../../components/requestHandler/requestHandler";
import { Table } from "react-bootstrap";
import Loader from "react-loader-spinner";
import PanelHeader from "../../layouts/PanelHeader/PanelHeader"
import Backdrop from "../../components/UI/Backdrop/Backdrop.jsx";
import { connect } from "react-redux";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
const thead = ["Farmer", "Crop", "Category"];
const FARMERS_QUERY = gql`
query{
  requests{
    farmer{
      name
      phone
    }
    crop
    category
    _id
  }
}
`

const Requests = (props) => {
  const { data, error, loading } = useQuery(FARMERS_QUERY);
  const [show, toggleShow] = useState(false);
  const [request, setRequest] = useState(null);
  const selectionHandler = (requestId) => {
    setRequest(requestId);
    toggleShow(true);
  }
  const modalClose = () => {
    toggleShow(false);
  }


  if (error) {
    console.log(error);
    return <p>...........</p>
  }

  return (
    <div>
      {
        show === true ? <Backdrop show={show} close={modalClose} /> : null
      }
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card style={{ height: "500px" }}>
              <CardHeader>
                <CardTitle tag="h4">Farmer Requests</CardTitle>
              </CardHeader>
              <CardBody>
                {
                  loading ?
                    <div style={{ position: "relative", top: "17vh", left: "30vw", height: "404px", width: "40%" }}>
                      <Loader type="Rings"
                        color="blue"
                        height={100}
                        width={100}
                        timeout={3000} />
                    </div> : <Table striped={true} borderless={true} responsive="md" style={{ overflowX: 'hidden' }}>
                      <thead className="text-primary">
                        <tr style={{ textAlign: 'center' }}>
                          {thead.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <th key={key} className="text-center">
                                  {prop}
                                </th>
                              );
                            return <th key={key}>{prop}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>

                        {
                          data.requests.map((props, key) => (
                            <tr key={key} onClick={() => selectionHandler(props._id)} style={{ textAlign: 'center', cursor: "pointer" }} >
                              <td className="text-center">{props.farmer.name}</td>
                              <td className="text-center">{props.crop}</td>
                              <td className="text-center">{props.category}</td>


                            </tr>
                          ))
                        }

                      </tbody>
                    </Table>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

      <Transition
        mountOnEnter
        unmountOnExit
        in={show}
        timeout={200}
      >
        {(state) => (<Request show={state}  requestId={request} close={modalClose} />)}
      </Transition>


    </div>
  );

};
const mapStateToProps = state => ({
  crop: state.crop.selectedCrop,
  category: state.crop.cropQuality
});
export default connect(mapStateToProps)(Requests);
