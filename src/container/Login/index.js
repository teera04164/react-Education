import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'
import {
    Form, FormGroup, FormInput, Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle

} from "shards-react";

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            id1: "active",
            id2: "",
            id3: "",
            togle: "main-sidebar col-12 col-md-3 col-lg-2 px-0",
            isShow: false

        };

    }
    componentDidMount(){
      
    }
    render() {
        return (
            <div>
                {/* <Container className = "mt-5">
                    <Row>   
                        <Col>
                            <Card style = {{width : "800px"}}>
                                <CardBody>
                                    <CardTitle>Sign In</CardTitle>
                                    <Form>
                                        <FormGroup>
                                            <label htmlFor="username">Username</label>
                                            <FormInput id="username" />
                                            <label htmlFor="username">Password</label>
                                            <FormInput id="username" />

                                        </FormGroup>
                                    </Form>

                                    <NavLink  to='/deshboard'><input type="submit" /></NavLink>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </Container>
 */}
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="LoginStyle/images/img-01.png" alt="IMG" />
                            </div>
                            <form className="login100-form validate-form">
                                <span className="login100-form-title">
                                    Member Login
                                    </span>
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="email" placeholder="Email" />
                                    <span className="focus-input100" />
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input className="input100" type="password" name="pass" placeholder="Password" />
                                    <span className="focus-input100" />
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true" />
                                    </span>
                                </div>
                                <NavLink  to='/deshboard'>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Login
                                   </button>
                                </div>
                                </NavLink>
                                <div className="text-center p-t-12">
                                    <span className="txt1">
                                        Forgot
                                    </span>
                                    <a className="txt2" href="#">
                                        Username / Password?
                                     </a>
                                  </div>
                                <div className="text-center p-t-136">
                                    <a className="txt2" href="#">
                                        Create your Account
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
