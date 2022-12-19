import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { listProducts } from "../../actions/productActions";
import { Table, Container } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteProduct } from "../../actions/productActions";
import { Link } from "react-router-dom";
const ApprovedWarehouse = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <Container>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>Error while fetching products {error}</Message>
        ) : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Warehouse Name</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Pincode</th>
                  <th>Wallet Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </>
  );
};

export default ApprovedWarehouse;