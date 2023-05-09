import React, { useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FormContext from "../FormContext/FormContext";

const Page3 = () => {
  const { formData, setFormData } = useContext(FormContext);

  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>Educational Level</Form.Label>
          <Form.Select
          value={formData.education}
          onChange={(e) =>
            setFormData({ ...formData, education: e.target.value })
          }
        > <option>please select!</option>
          <option>P.H.D</option>
          <option>Post Graduated</option>
          <option>Graduated</option>
          <option>Matrix Pass</option>
        </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Employment Status</Form.Label>
          <Form.Select
          value={formData.employment}
          onChange={(e) =>
            setFormData({ ...formData, employment: e.target.value })
          }
        > <option>please select!</option>
          <option>Currently Working</option>
          <option>Not Working</option>
          <option>On Notice Period</option>
          <option>Immediate Joiner</option>
        </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Annual Income in LPA</Form.Label>
        <Form.Control
          value={formData.income}
          type="number"
          placeholder="Be Honest 🙂"
          onChange={(e) => setFormData({ ...formData, income: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Marital Status</Form.Label>
        <Form.Select
          value={formData.marital}
          onChange={(e) =>
            setFormData({ ...formData, marital: e.target.value })}
        >
          <option>i can feel you bro 🥲</option>
          <option>Married 💝</option>
          <option>Unmarried 💔</option>
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

export default Page3;
