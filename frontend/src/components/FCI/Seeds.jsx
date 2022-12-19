import React from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { AiFillDelete } from "react-icons/ai";
import { getApprovedSeeds } from "../../actions/productActions";

const AllSeeds = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.allSeed);
  const { loading, error, seeds } = userList;
  useEffect(() => {
    dispatch(getApprovedSeeds());
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
                  <th>Seed Name</th>
                  <th>Quantity</th>
                  <th>Place of Harvesting</th>
                  <th>Date of Harvesting</th>
                  <th>Date of Submission</th>
                </tr>
              </thead>
              <tbody>
                {seeds &&
                  seeds.map((user) => (
                    <tr>
                      <td>{user.seedName}</td>
                      <td>{user.quantity}</td>
                      <td>{user.place}</td>
                      <td>{user.date.slice(0,10)}</td>
                      <td>{user.updatedAt.slice(0,10)}</td>
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

export default AllSeeds;
