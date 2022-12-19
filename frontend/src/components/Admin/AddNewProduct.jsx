import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addProduct } from "../../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";
import Message from "../shared/Message";
import Success from "../shared/Success";

const AddNewProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [brand, setbrand] = useState("");

  const addProductState = useSelector((state) => state.addProduct);
  const { loading, error, success } = addProductState;

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const product = {
      name,
      image,
      description,
      category,
      price,
      brand,
    };
    dispatch(addProduct(product));
  };
  return (
    <div>
      {loading && <Loader />}
      {error && <Message error="Add new product error" />}
      {success && <Success error="Product added succesfully" />}
      {/* {success && <Success success="Product Added Successfully" />} */}
      <Form onSubmit={submitForm} className="p-4">
        <Row className="mb-2">
          <Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter product name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(e) => setprice(e.target.value)}
                placeholder="Enter price"
              />
            </Form.Group>
          </Row>
        </Row>
        <Row >
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              placeholder="Enter Category"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type="text"
              value={brand}
              onChange={(e) => setbrand(e.target.value)}
              placeholder="Enter Brand"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              ttype="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>
        <Row className="mb-2">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Enter Description"
            />
          </Form.Group>
        </Row>

        <button className="btn" style={{'background-color':'#22A39F', 'color':'#000000'}}>
          Add New
        </button>
      </Form>
    </div>
  );
};

export default AddNewProduct;
