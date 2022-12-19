import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addSeeds } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { getBreederById } from "../../actions/userAction";

const BreederForm = () => {
  const [name, setname] = useState("");
  const [quantity, setquantity] = useState("");
  const [place, setplace] = useState("");
  const [date, setdate] = useState("");
  const [category, setcategory] = useState("");

  const addProductState = useSelector((state) => state.addSeeds);
  const { loading, error } = addProductState;

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;

  const getBreederState = useSelector((state) => state.getBreederById);
  // console.log(getBreederState.user);
  // const {_id} = getBreederState.user;
  const id = "6341c2a642861b3e7536d9a3";
  // const id = _id;

  useEffect(() => {
    dispatch(getBreederById(userInfo._id));
  }, [dispatch, userInfo._id]);

  const submitForm = (e) => {
    e.preventDefault();
    const product = {
      id,
      name,
      quantity,
      place,
      date,
      category,
    };
    dispatch(addSeeds(product));
  };
  return (
    <div>
      {loading && <Loader />}
      {error && <Message error="Add new product error" />}
      <Form onSubmit={submitForm} className="bg-light">
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Seed Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Seed Name"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Seeds Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setquantity(e.target.value)}
              placeholder="Seeds Quantity"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Place of growing</Form.Label>
            <Form.Control
              type="text"
              value={place}
              onChange={(e) => setplace(e.target.value)}
              placeholder="Place of growing"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Date of Harvesting</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setdate(e.target.value)}
              placeholder="Date of harvesting"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Seed Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              placeholder="Seed Category"
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

export default BreederForm;
