import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Table } from "react-bootstrap";
import {
  transportList,
  denyTransport,
  approveTransport,
} from "../../actions/userAction";

const TransportList = () => {
  const dispatch = useDispatch();
  const breederListState = useSelector((state) => state.transportList);
  const { loading, error, users } = breederListState;

  useEffect(() => {
    dispatch(transportList());
  }, [dispatch]);

  return (
    <>
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>Error while fetching breeders {error}</Message>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Phone No</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.cityName}</td>
                      <td>{user.state}</td>
                      <td>{user.phoneNo}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            dispatch(approveTransport(user._id));
                          }}
                        >
                          Approve
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            dispatch(denyTransport(user._id));
                          }}
                        >
                          Deny
                        </button>
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

export default TransportList;
