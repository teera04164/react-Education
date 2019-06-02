import React from "react";
import { Route, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button , Container, Row, Col } from "shards-react";

const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
    render() {
        return (
            <div>
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3 ">
                    <div className="main-content-container container-fluid px-4 mt-4">
                        <Card>
                        <Container className="dr-example-container">
                            <Row>
                                <Col className = "mt-4 ml-4 mb-1 h4">ห้องเรียน</Col>
                                <Col className = "mt-4 mr-4 text-right">
                                <Link to = "/user/add">
                                <Button pill >เพิ่มภาคการเรียน</Button>
                                </Link>
                              
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <CardBody>
                            
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">ปีการศึกษา</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>ปีการศึกษาที่ 1/2562</td>
                                        <td>
                                            <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link>
                                        </td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>ปีการศึกษาที่ 2/2562</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </CardBody>
                                </Col>
                            </Row>
                           
                            </Container>
                        </Card>




                    </div>
                </main>


            </div>

        );
    }
}

export default Users;
