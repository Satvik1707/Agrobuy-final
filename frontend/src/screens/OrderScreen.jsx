import React, { useState, useEffect } from "react";
import axios from "axios";
import { ORDER_PAY_RESET } from "../constants/orderConstant";
import { Row, Col, ListGroup, Image, Card, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getOrderDetails, payOrder } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/shared/Message";
import Loader from "../components/shared/Loader";
import { useMetaMask, useConnectedMetaMask  } from "metamask-react";
import MetaMaskLoginButton from "react-metamask-login-button";
import * as ethers from 'ethers'
const {BigNumber} = ethers
const OrderScreen = ({ match }) => {
  const orderId = match.params.id;
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();

  const { status, connect, account, chainId, ethereum } = useMetaMask();
  console.log({ status, connect, account, chainId, ethereum });

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successpay } = orderPay;
  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  const successPaymentHandler = (paymentResult) => {
    // console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  const oneRupeeInEth = 0.000010219276555042911


  const handlePayAmount = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const to = '0x9803504EF43e31fd4c91e7e4E175AD2280826faa'

    const ethValue = (order.totalPrice || 1150) * oneRupeeInEth

    await signer.sendTransaction({to, value: ethers.utils.parseEther(ethValue.toString())})
  };

  // console.log(successPaymentHandler);

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successpay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, successpay]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h2>Order {order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
            <h2>Pickup Details</h2>
            <p>
              <strong>Name : </strong>
              {order.user.name}
            </p>
            <p>
              <strong>Email : </strong>
              {order.user.email}
            </p>
            <p>
              <strong>Address :</strong>
              {order.shippingAddress.address}&nbsp;
              {order.shippingAddress.city}&nbsp;
              {order.shippingAddress.postalcode}&nbsp;
              {order.shippingAddress.country}&nbsp;
            </p>
            {order.isDeliverd ? (
              <Message variant="success">Paid On {order.isDeliverd}</Message>
            ) : (
              <Message variant="danger">Not Delivered</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method :</strong>
              <strong>{order.paymentMethod}</strong>
            </p>
            {order.isPaid ? (
              <Message variant="success">Paid On {order.paidAt}</Message>
            ) : (
              <Message variant="danger">Not Paid</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <Message>Your Cart is Empty</Message>
            ) : (
              <ListGroup variant="flush">
                {order.orderItems.map((item, index) => (
                  <ListGroup.Item key={index}>
                    <Row>
                      <Col md={1}>
                        <Image src={item.image} alt={item.name} fluid />
                      </Col>
                      <Col>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={4}>
                        {item.qty} X ₹{item.price} = ₹{item.price}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>₹{order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>₹{order.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>₹{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {!order.isPaid && (
            <ListGroup.Item>
              {loadingPay && <Loader />}
              {!sdkReady ? (
                status === "notConnected" ? (
                  <button onClick={() => connect()}> connect</button>
                ) : (
                  <button type="button"
                  variant="light" onClick={() => handlePayAmount()}>Pay Amount </button>
                )
              ) : ( 
                // <PayPalButton
                //   amount={order.totalPrice}
                //   onSuccess={successPaymentHandler}
                // />
                <div></div>
              )}
            </ListGroup.Item>
          )}
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
