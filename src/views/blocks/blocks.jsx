import React, { useState } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Row,
    Col,
    Button
} from "reactstrap";
import PanelHeader from "../../layouts/PanelHeader/PanelHeader"
import Axios from "axios";
let oneTime = true;
class Blocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 0,
            paginationId: 1,
            blocks: []
        }
    }

    fetchLength = () => {
        Axios.get("http://localhost:8000/api/blocks/length").then(res => {
            this.setState({ length: res.data })
        }).catch(e => { throw e })

    }

    fetchBlock = (paginationId) => {

        Axios.get(`http://localhost:8000/api/blocks/${paginationId}`).then(response => {
            console.log(response.data)
            this.setState({ blocks: response.data })
        }).catch(e => { throw e });

    }

    componentDidMount = () => {
        this.fetchLength();
        this.fetchBlock(this.state.paginationId);
    }
    render() {
        return (
            <div>

                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col xs={12}>
                            <Card style={{ height: "max-content" }}>
                                <CardHeader>
                                    <CardTitle tag="h5">Credit Blocks</CardTitle>
                                </CardHeader>
                                <CardBody style={{ height: "832px" }}>


                                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>

                                        {
                                            this.state.blocks.map((block, idx) => {
                                                return (
                                                    <div key={idx} style={{ display: "flex", flexDirection: "column",borderBlockStyle:"solid",borderBlockWidth:"1px",borderBlockColor:"#dcdcdc"}}>
                                                        <p >Farmer : {block.data.transactions.length > 0 ? block.data.transactions[0].farmer : "Genesis"}</p>
                                                        <p>amount : {block.data.transactions.length > 0 ? block.data.transactions[0].amount : "Genesis"}</p>
                                                        <p> bank : {block.data.transactions.length > 0 ? block.data.transactions[0].bank : "Genesis"}</p>
                                                        <p>credit_score : {block.data.transactions.length > 0 ? block.data.transactions[0].credit_score : "Genesis"}</p>

                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div style={{ margin: "auto", paddingLeft: "302px" }}>
                                        {

                                            [...Array(Math.ceil(this.state.length / 5)).keys()].map((key) => {
                                                const paginationId = key + 1;
                                                return (
                                                    <span key={key} onClick={() => { console.log(paginationId); this.fetchBlock(paginationId) }}>
                                                        <Button bsSize="small">{paginationId}</Button>{' '}
                                                    </span>
                                                );
                                            })

                                        }
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>



            </div>
        );
    }

}

export default Blocks;