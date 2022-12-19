import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransport, getAllTransport } from "../../actions/userAction";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { AiFillDelete } from "react-icons/ai";

const Transport = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.getAllTransport);
  const { loading, error, users } = userList;
  useEffect(() => {
    dispatch(getAllTransport());
  }, [dispatch]);

  return (
    <>
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>Error while fetching transporters {error}</Message>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>E-mail address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => (
                    <tr>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <AiFillDelete
                          style={{ cursor: "pointer", color: "red" }}
                          onClick={() => {
                            dispatch(deleteTransport(user._id));
                          }}
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

export default Transport;
