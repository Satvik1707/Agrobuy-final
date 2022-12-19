import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Table } from "react-bootstrap";
import {
  breederList,
  denyBreeder,
  approveBreeder,
} from "../../actions/userAction";

const BreederList = () => {
  const dispatch = useDispatch();
  const breederListState = useSelector((state) => state.breederList);
  const { loading, error, users } = breederListState;

  useEffect(() => {
    dispatch(breederList());
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
                            dispatch(approveBreeder(user._id));
                          }}
                        >
                          Approve
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            dispatch(denyBreeder(user._id));
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

export default BreederList;
