import React, { Component } from 'react'
import {
    Card,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText
  } from "shards-react";
export default class add extends Component {
    render() {
        return (
            <div>
                  <main className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3 ">
                    <div className="main-content-container container-fluid px-4 mt-4">
                        <Card>
                      <InputGroup className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>@</InputGroupText>
      </InputGroupAddon>
      <FormInput placeholder="Username" />
    </InputGroup>

    <InputGroup className="mb-3">
      <FormInput value="catalin" onChange={() => {}} />
      <InputGroupAddon type="append">
        <InputGroupText>@designrevision.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>

    <InputGroup className="mb-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>$</InputGroupText>
      </InputGroupAddon>
      <FormInput value="1000" onChange={() => {}} />
      <InputGroupAddon type="append">
        <InputGroupText>.00</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
                        </Card>




                    </div>
                </main>
            </div>
        )
    }
}
