import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { seedList, approveSeeds, denySeeds } from "../../actions/productActions";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { Table } from "react-bootstrap";

const SeedsList = () => {
  const dispatch = useDispatch();
  const seedListState = useSelector((state) => state.seedList);
  const { loading, error, seeds } = seedListState;
  // console.log(seedListState);
  useEffect(() => {
    dispatch(seedList());
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
                  <th>Request Submission Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {seeds &&
                  seeds.map((seed) => (
                    <tr>
                      <td>{seed.seedName}</td>
                      <td>{seed.quantity}</td>
                      <td>{seed.place}</td>
                      <td>{seed.date.slice(0,10)}</td>
                      <td>{seed.updatedAt.slice(0,10)}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            dispatch(approveSeeds(seed._id));
                          }}
                        >
                          Approve
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            dispatch(denySeeds(seed._id));
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

export default SeedsList;
