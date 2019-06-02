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
   componentDidMount(){
       
   }

   onClickSave = async () =>{
    Swal.fire({
        position: 'center',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      }).then(()=>{
        this.setState({redirect : true})
      })
   
   }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/user" />;
          }
        return (
            <div>
                <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3 ">
                    <div className="main-content-container container-fluid px-4 mt-4">
                        <Card>
                            <Container className="dr-example-container mt-4 mb-4" >
                                <CardBody style={{ padding: 0 }}>
                                    <CardTitle><h4>เพิ่มปีการศึกษา</h4></CardTitle>
                                </CardBody>
                                <hr />
                                <Form>
                                    <Row>
                                        <Col sm="12" lg="6" >
                                            <label htmlFor="username">ภาคการศึกษา </label>
                                            <FormSelect size="lg">

                                                <option value="first"> 1</option>
                                                <option value="second"> 2</option>

                                            </FormSelect>

                                        </Col >
                                        <Col sm="12" lg="6">
                                            <label htmlFor="username">ปีการศึกษา</label>
                                            <FormSelect size="lg">
                                                <option value="first">2561</option>
                                                <option value="second">2562</option>
                                                <option value="second">2563</option>
                                                <option value="second">2564</option>
                                                <option value="second">2565</option>
                                                <option value="second">2566</option>
                                                <option value="second">2567</option>
                                            </FormSelect>
                                        </Col>
                                    </Row>
                                </Form>
                                <hr />
                                <Row>
                                    <Col className="text-center">
                                    <Button onClick= {this.onClickSave} theme="primary">บันทึก</Button>
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
