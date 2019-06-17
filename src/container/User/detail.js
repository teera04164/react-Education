import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button, Container, Row, Col } from "shards-react";

const User = ({ match }) => <p>{match.params.id}</p>;


export default class detail extends Component {
    constructor() {
        super()
        this.state = {
            _id: '',
            notification: false
        }
    }

    componentDidMount() {
        const { _id } = this.props.match.params
        const { notification } = this.props.location.state
        this.setState({ _id, notification })
    }
    render() {
        const { _id, notification } = this.state
        return (
            <div>
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3 ">
                    <div className="main-content-container container-fluid px-4 mt-4">
                        <Card>
                            <Container className="dr-example-container">
                                <Row>
                                    <Col className="mt-4 ml-4 mb-1 h4">ภาคการศึกษา {_id.replace("-", "/")}</Col>
                                    <Col className="mt-4 mr-4 text-right">
                                        <Link to="/user/add">
                                            <Button pill >เพิ่มภาคการเรียน</Button>
                                        </Link>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <CardBody>
                                            <h1>{notification}</h1>
                                        </CardBody>
                                    </Col>
                                </Row>

                            </Container>
                        </Card>




                    </div>
                </main>
            </div>
        )
    }
}
