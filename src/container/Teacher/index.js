import React from "react";
import { Route, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button , Container, Row, Col } from "shards-react";

const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
    constructor() {
        super()
        this.state = {
            _year : '',
            _class : '',
            notification: false
        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3 ">
                    <div className="main-content-container container-fluid px-4 mt-4">
                        <Card>
                        <Container className="dr-example-container">
                            <Row>
                                <Col className = "mt-4 ml-4 mb-1 h4">บุคลากร</Col>
                                <Col className = "mt-4 mr-4 text-right">
                                <Link to = "/user/add">
                                <Button pill >นำเข้านักเรียน</Button>
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
                                        <th scope="col">เลขประจำตัว</th>
                                        <th scope="col">ชื่อ - สกุล</th>
                                        <th scope="col">กลุ่มสาระการเรียนรู้</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td>
                                            <Link to = "/class/1-2562/1-1">
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
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
                                        <td> <Link to = "/user">
                                            <span class="badge badge-pill badge-info">
                                            <i className = "fas fa-search">
                                            </i>
                                            &nbsp;รายระเอียด
                                            </span>
                                            </Link></td>
                                       
                                    </tr><tr>
                                        <th scope="row">10</th>
                                        <td>04164</td>
                                        <td>ธีรพงษ์  สิทธิการ</td>
                                        <td>สังคมศึกษา</td>
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
