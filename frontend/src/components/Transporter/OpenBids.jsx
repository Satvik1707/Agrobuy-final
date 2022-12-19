import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Button, Col, Form, Modal, Table } from "react-bootstrap";
import { openBidList } from "../../actions/productActions";
import Popup from 'reactjs-popup';
import './popup.css';
const OpenBids = () => {
  const dispatch = useDispatch();
  const breederListState = useSelector((state) => state.openBidList);
  const { loading, error, bids } = breederListState;
  const id = "6341c2a642861b3e7536d9a3";
  const [modalShow, setModalShow] = React.useState(false);
  

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  const submitForm = (e, amount) => {
    e.preventDefault();
    const bid = {
      id,
      amount
    }
    // console.log(bid);
  }

  const SubmitandClose = (e, amount) => {
    submitForm(e,amount);
    handleClose();
  }

  function MyVerticallyCenteredModal(props) {
    const [amount, setamount] = useState("");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Enter Bid Amount
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Bid Amount</Form.Label>
            <Form.Control
              type="text"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              placeholder="Bid Amount"
            />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={(e) => SubmitandClose(e,{amount})}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  useEffect(() => {
    dispatch(openBidList());
  }, [dispatch]);

  return (
    <>
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>Error while fetching OpenBids {error}</Message>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Source Address</th>
                  <th>Destination Address</th>
                  <th>Minimum Bid Amount</th>
                  <th>Bidding End Date</th>
                  <th>Bid Amount</th>
                </tr>
              </thead>
              <tbody>
                {bids &&
                  bids.map((user) => (
                    <tr>
                      <td>
                        {user.sourcecity}, {user.sourcestate}
                      </td>
                      <td>
                        {user.destinationcity}, {user.destinationstate}
                      </td>
                      <td>{user.shipmentcost}</td>
                      <td>{user.endTime.slice(0, 10)}</td>
                      <td>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                          Bid
                        </Button>

                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        )}
      </>
    </>
  );
};

export default OpenBids;
