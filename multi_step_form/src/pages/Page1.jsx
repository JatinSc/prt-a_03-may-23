import React, { useState , useContext} from "react";
import FormContext from "../FormContext/FormContext";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Page1 = () => {
 
  const {formData,setFormData} = useContext(FormContext);
 
  return (
    <Form>
      <Row className="mb-4 my-4" >
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
          value={formData.fName}
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setFormData({ ...formData, fName: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
          value={formData.lName}
            type="text"
            placeholder="Enter Last Name"
            onChange={(e) => setFormData({ ...formData, lName: e.target.value })}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-4" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
        value={formData.email}
          type="email"
          placeholder="enter email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        value={formData.password}
          type="password"
          placeholder="enter your password here!"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </Form.Group>
    </Form>
  );
};

export default Page1;
