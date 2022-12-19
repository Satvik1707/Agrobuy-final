import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { transportRegister } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const RegistrationForm = ({ match }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState();
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [phnNo, setphnNo] = useState("");
  const [email] = useState("");
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;
  const id = userInfo._id;
  
  // console.log(id);

  const submitForm = (e) => {
    e.preventDefault();
    const register = {
      id,
      email,
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      pincode,
      phnNo,
    };
    dispatch(transportRegister(register));
  };
  return (
    <div>
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-2">
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                placeholder="Last Name"
              />
            </Form.Group>
          </Row>
        </Row>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              type="text"
              value={address1}
              onChange={(e) => setaddress1(e.target.value)}
              placeholder="Address Line 1"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              value={address2}
              onChange={(e) => setaddress2(e.target.value)}
              placeholder="Address Line 2"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>City</Form.Label>
            <Form.Control
              ttype="text"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              placeholder="City"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              value={state}
              onChange={(e) => setstate(e.target.value)}
              placeholder="State"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Pin Code</Form.Label>
            <Form.Control
              type="number"
              value={pincode}
              onChange={(e) => setpincode(e.target.value)}
              placeholder="Pin Code"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              type="number"
              value={phnNo}
              onChange={(e) => setphnNo(e.target.value)}
              placeholder="Phone No."
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
