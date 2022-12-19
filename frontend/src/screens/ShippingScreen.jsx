import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FromContainer from "../components/shared/FromContainer";
import { saveShippingAddress } from "../actions/cartAction";
import CheckoutStep from "../components/shared/CheckoutStep";

const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city] = useState(shippingAddress.city);
  const [postalcode] = useState(shippingAddress.postalcode);
  const [country] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalcode, country }));
    history.push("/payment");
  };

  return (
    <>
      <CheckoutStep step1 step2 />
      <FromContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Warehouse</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Patiala"
                id="Metamask"
                name="paymentMethod"
                value="Patiala"
                onChange={
                  (e) => {setAddress(e.target.value)}
                  // setCity(e.target.value),
                  // setPostalcode(e.target.value),
                  // setCountry(e.target.value)
                }
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary">
            {'\n'}Continue
          </Button>
        </Form>
      </FromContainer>
    </>
  );
};

export default ShippingScreen;
