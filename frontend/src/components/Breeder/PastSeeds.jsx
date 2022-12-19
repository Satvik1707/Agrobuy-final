import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { listMySeeds } from "../../actions/productActions";

const PastSeeds = () => {
  const dispatch = useDispatch();

  const mySeedList = useSelector((state) => state.listMySeeds);
  const { seeds } = mySeedList;

  useEffect(() => {
    dispatch(listMySeeds());
  }, [dispatch]);

  return (
    <>
      <>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Seed Name</th>
                <th>Quantity</th>
                <th>Date of Harvesting</th>
                <th>Place of Harvesting</th>
                <th>Seeds Submission Date</th>
              </tr>
            </thead>
            <tbody>
              {seeds &&
                seeds.map((xyz) => (
                  <tr>
                    <td>{xyz.seedName}</td>
                    <td>{xyz.quantity}</td>
                    <td>{xyz.date.slice(0,10)}</td>
                    <td>{xyz.place}</td>
                    <td>{xyz.updatedAt.slice(0,10)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </>
    </>
  );
};

export default PastSeeds;
