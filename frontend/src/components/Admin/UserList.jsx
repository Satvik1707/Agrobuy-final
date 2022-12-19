import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../../actions/userAction";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { AiFillDelete } from "react-icons/ai";

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.getAllUser);
  const { loading, error, users } = userList;
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <>``
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>Error while fetching users {error}</Message>
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
                            dispatch(deleteUser(user._id));
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

export default UserList;
