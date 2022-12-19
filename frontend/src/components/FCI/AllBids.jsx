import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Table } from "react-bootstrap";
import { closedBidList } from "../../actions/productActions";

const AllBids = () => {
  const dispatch = useDispatch();
  const breederListState = useSelector((state) => state.closedBidList);
  const { loading, error, bids } = breederListState;

  useEffect(() => {
    dispatch(closedBidList());
  }, [dispatch]);

  return (
    <>
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>Error while fetching Closed Bids {error}</Message>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Shipment Name</th>
                  <th>Shipment Quantity</th>
                  <th>Bid End Date</th>
                  <th>Transporter ID</th>
                  <th>Transporter Credit Score</th>
                  <th>Maximum Bid</th>
                </tr>
              </thead>
              <tbody>
                {bids &&
                  bids.map((user) => (
                    <tr>
                      <td>{user.shipmentname}</td>
                      <td>{user.shipmentquantity}</td>
                      <td>{user.endTime.slice(0, 10)}</td>
                      <td></td>
                      <td></td>
                      <td></td>
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

export default AllBids;
