import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import { listProducts } from "../../actions/productActions";
import { Table, Container } from "react-bootstrap";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteProduct } from "../../actions/productActions";
import { Link } from "react-router-dom";
const ProductList = () => {
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
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Count In Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((product) => (
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>{product.brand}</td>
                      <td>{product.countInStock}</td>
                      <td>
                        &nbsp; &nbsp; &nbsp;
                        <Link to ={`/admin/updateproduct/${product._id}`}>
                          <AiFillEdit style = {{cursor: "pointer"}}/>
                        </Link>
                        &nbsp; &nbsp; &nbsp;
                        <Link>
                          <AiFillDelete style={{color: "red"}} onClick={()=> {dispatch(deleteProduct(product._id))}}/>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </>
  );
};

export default ProductList;