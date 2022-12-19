import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { createBid } from "../../actions/productActions";

const CreateBid = () => {
  const [sourceAdd1, setsourceAdd1] = useState("");
  const [sourceAdd2, setsourceAdd2] = useState("");
  const [sourceCity, setsourceCity] = useState("");
  const [sourceState, setsourceState] = useState("");
  const [sourcePincode, setsourcePincode] = useState("");
  const [destAdd1, setdestAdd1] = useState("");
  const [destAdd2, setdestAdd2] = useState("");
  const [destCity, setdestCity] = useState("");
  const [destState, setdestState] = useState("");
  const [destPincode, setdestPincode] = useState("");
  const [shipName, setshipName] = useState("");
  const [shipQuantity, setshipQuantity] = useState("");
  const [shipCost, setshipCost] = useState("");
  const [endDate, setendDate] = useState("");
  const [bidders, setbidders] = useState("");

  const addProductState = useSelector((state) => state.createBid);
  const { loading, error } = addProductState;

  const submitForm = (e) => {
    e.preventDefault();
    const bid = {
      sourceAdd1,
      sourceAdd2,
      sourceCity,
      sourceState,
      sourcePincode,
      destAdd1,
      destAdd2,
      destCity,
      destState,
      destPincode,
      shipName,
      shipCost,
      shipQuantity,
      endDate,
      bidders,
    };
    dispatch(createBid(bid));
  };
  const dispatch = useDispatch();

  return (
    <>
      <>
        {/* {loading && <Loader />} */}
        {error && <Message error="Create new bid error" />}
        <Form onSubmit={submitForm} className="bg-light">
          <h4>Source Address</h4>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                value={sourceAdd1}
                onChange={(e) => setsourceAdd1(e.target.value)}
                placeholder="Address Line 1"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                value={sourceAdd2}
                onChange={(e) => setsourceAdd2(e.target.value)}
                placeholder="Address Line 2"
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={sourceCity}
                onChange={(e) => setsourceCity(e.target.value)}
                placeholder="City"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                value={sourceState}
                onChange={(e) => setsourceState(e.target.value)}
                placeholder="State"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="number"
                value={sourcePincode}
                onChange={(e) => setsourcePincode(e.target.value)}
                placeholder="Pincode"
              />
            </Form.Group>
          </Row>
          <h4>Destination Address</h4>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                value={destAdd1}
                onChange={(e) => setdestAdd1(e.target.value)}
                placeholder="Address Line 1"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                value={destAdd2}
                onChange={(e) => setdestAdd2(e.target.value)}
                placeholder="Address Line 2"
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                value={destCity}
                onChange={(e) => setdestCity(e.target.value)}
                placeholder="City"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                value={destState}
                onChange={(e) => setdestState(e.target.value)}
                placeholder="State"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="number"
                value={destPincode}
                onChange={(e) => setdestPincode(e.target.value)}
                placeholder="Pincode"
              />
            </Form.Group>
          </Row>
          <h4>Shipment Details</h4>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>Shipment Name</Form.Label>
              <Form.Control
                type="text"
                value={shipName}
                onChange={(e) => setshipName(e.target.value)}
                placeholder="Shipment Name"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={shipQuantity}
                onChange={(e) => setshipQuantity(e.target.value)}
                placeholder="Quantity"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Minimum Bid Amount</Form.Label>
              <Form.Control
                type="number"
                value={shipCost}
                onChange={(e) => setshipCost(e.target.value)}
                placeholder="Minimum Bid Amount"
              />
            </Form.Group>
          </Row>
          <h4>Other Details</h4>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Bid End Date</Form.Label>
              <Form.Control
                type="date"
                value={endDate}
                onChange={(e) => setendDate(e.target.value)}
                placeholder="Bid End Date"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Maximum number of Bidders</Form.Label>
              <Form.Control
                type="number"
                value={bidders}
                onChange={(e) => setbidders(e.target.value)}
                placeholder="Maximum number of Bidders"
              />
            </Form.Group>
          </Row>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    </>
  );
};

export default CreateBid;
