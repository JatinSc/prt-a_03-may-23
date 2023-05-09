import React, { useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FormContext from "../FormContext/FormContext";

const Page2 = () => {
  const { formData, setFormData } = useContext(FormContext);
  return (<>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            value={formData.dob}
            type="date"
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
          />
        </Form.Group>
      </Row>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={4}>
            Gender
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Male 🧑‍🦰"
              value="Male 🧑‍🦰"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              checked={formData.gender=="Male 🧑‍🦰"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            <Form.Check
              type="radio"
              label="Female 👩‍🦳"
              value="Female 👩‍🦳"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              checked={formData.gender=="Female 👩‍🦳"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            <Form.Check
              type="radio"
              label="Others 🏳️‍🌈"
              value="Others 🏳️‍🌈"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
              checked={formData.gender=="Others 🏳️‍🌈"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          value={formData.number}
          type="number"
          placeholder="+91 9282693687...."
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
        />
      </Form.Group>

      <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
              <Form.Control as="textarea" rows={3}
               value={formData.address}
               type="text"
               placeholder="enter your address here!"
               onChange={(e) =>
                 setFormData({ ...formData, address: e.target.value })
               }
              />
            </Form.Group>
    </Form>
    </>
  );
};

export default Page2;
