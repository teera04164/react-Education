import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from "shards-react";
export default class index extends Component {
    render() {
        return (
            <div>
                <Container className="dr-example-container">
                    <Row>
                        <Col sm="12" lg="6" className = "bg-primary">
                            sm=12 lg=6
          </Col>
                        <Col sm="12" lg="6" className = "bg-info">
                            sm=12 lg=6
          </Col>
                    </Row>

                    <Row>
                        <Col sm="12" md="4" lg="3" className = "bg-danger">
                            sm=12 md=4 lg=3
          </Col>
                        <Col sm="12" md="4" lg="6" className = "bg-warning">
                            sm=12 md=4 lg=6
          </Col>
                        <Col sm="12" md="4" lg="3" className = "bg-danger">
                            sm=12 md=4 lg=3
          </Col>
                    </Row>

                    <Row>
                        <Col sm={{ size: 8, order: 2, offset: 2 }} className = "bg-danger">
                            .col-sm-8 .order-sm-2 .offset-sm-2
          </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
