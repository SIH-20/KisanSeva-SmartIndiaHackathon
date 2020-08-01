import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { Table } from "react-bootstrap";
import Loader from "react-loader-spinner";
import PanelHeader from "../../layouts/PanelHeader/PanelHeader"
import { Link } from "react-router-dom";
import { thead } from "variables/general";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { connect } from "react-redux"
const FARMERS_QUERY = gql`
query($crop:String!,$category:String!){
  complaints(crop:$crop,category:$category){
    farmer{
      _id
      name
      avg_rating
      ratings
    }
   count
    }
}

`

const RegularTables = (props) => {
  console.log(props);
  const { data, error, loading } = useQuery(FARMERS_QUERY, {
    variables: { crop: props.crop, category: props.category }
  });


  const selectionHandler = (farmerId) => {
    props.history.push(`/user/${farmerId}`);
  }


  if (error) {
    console.log(error);
    return <p>...........</p>
  }
  return (
    <div>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card style={{ height: "500px" }}>
              <CardHeader>
                <CardTitle tag="h4">Farmer analytics</CardTitle>
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

                        {data.complaints.map((prop, key) => {
                          return (

                            <tr onClick={() => selectionHandler(prop.farmer._id)} style={{ textAlign: 'center', cursor: "pointer" }} key={key}>

                              <td className="text-center">{`${prop.farmer.name}`}</td>
                              <td className="text-center">{prop.count}</td>
                              <td className="text-center">{prop.farmer.avg_rating.toFixed(2)}</td>
                              <td className="text-center">{prop.farmer.ratings}</td>

                            </tr>

                          );
                        })}
                      </tbody>
                    </Table>
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>




    </div>
  );

}
const mapStateToProps = state => ({
  crop: state.crop.selectedCrop,
  category: state.crop.cropQuality
});
export default connect(mapStateToProps)(RegularTables);
