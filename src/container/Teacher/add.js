import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import {
    Card,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Container, Row, Col, Form, FormGroup, FormInpu, FormSelect, CardTitle, CardSubtitle, CardBody, Button
} from "shards-react";
import Swal from 'sweetalert2'
export default class add extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        };
    }
    componentDidMount() {

    }

    onClickSave = async () => {
        Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            this.setState({ redirect: true })
        })

    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/subject" />;
        }
        return (
            <div>
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3 ">
                    <div className="main-content-container container-fluid px-4 mt-4">
                        <Card>
                            <Container className="dr-example-container mt-4 mb-4" >
                                <CardBody style={{ padding: 0 }}>
                                    <CardTitle><h4>เพิ่มอาจารย์</h4></CardTitle>
                                </CardBody>
                                <hr />
                                <Form>
                                    <Row>
                                        <Col sm="12" lg="6" >
                                            <label htmlFor="username" className = "mt-2">ชื่อ</label>
                                            <FormInput size="lg" placeholder="Ex.523101" />

                                        </Col >
                                        <Col sm="12" lg="6" >
                                            <label htmlFor="username" className = "mt-2">นามสกุล</label>
                                            <FormInput size="lg" placeholder="Ex.ภาษาไทย" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm="12" lg="6" >
                                            <label htmlFor="username" className = "mt-2">เพศ </label>
                                            <FormInput size="lg" placeholder="Ex.523101" />

                                        </Col >
                                      
                                            <Col sm="12" lg="6" >
                                            <label htmlFor="username" className = "mt-2">วันเกิด </label>
                                            <FormInput size="lg" placeholder="Ex.เปิดสอน" />
                                        </Col>                                                                                                                
                                    </Row>
                                    <Row>
                                    <Col sm="12" lg="6" >
                                            <label htmlFor="username" className = "mt-2">รหัสประจำตัว </label>
                                            <FormInput size="lg" placeholder="Ex.523101" />

                                        </Col >
                                      
                                            <Col sm="12" lg="6" >
                                            <label htmlFor="username" className = "mt-2">เบอร์โทร </label>
                                            <FormInput size="lg" placeholder="Ex.เปิดสอน" />
                                        </Col>
                                       
                                    </Row>
                                    <Row>
                                    <Col sm="12" lg="6" >
                                            <label htmlFor="username" className = "mt-2">Email </label>
                                            <FormInput size="lg" placeholder="Ex.523101" />

                                        </Col >
                                      
                                            <Col sm="12" lg="6" >
                                            <label htmlFor="username" className = "mt-2">ที่อยู่</label>
                                            <FormInput size="lg" placeholder="Ex.เปิดสอน" />
                                        </Col>
                                       
                                    </Row>
                                </Form>
                                <hr />
                                <Row>
                                    <Col className="text-center">
                                        <Button onClick={this.onClickSave} theme="primary">บันทึก</Button>
                                        {/* <Link to="/user">
                                            <Button theme="warning" className="mr-2">ย้อนกลับ</Button>
                                        </Link>
                                        <Link to="">
                                            <Button theme="primary">ถัดไป</Button>
                                        </Link> */}

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
