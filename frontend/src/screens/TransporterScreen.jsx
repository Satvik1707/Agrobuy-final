import React from "react";
import RegistrationForm from "../components/Transporter/RegistrationForm";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import OpenBids from "../components/Transporter/OpenBids";
import MyBids from "../components/Transporter/MyBids";

const BreederScreen = () => {
  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;

  return (
    <Container>
      <Row>
        <h1 className="text-center p-2 ">Transport Panel</h1>
        <br />
        <Col md={2}>
          {!userInfo.isTransport ? (
            <div className="d-grid gap-2" role="group">
              <a
                href="/transport/register"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Registration Form
              </a>
              <br />
            </div>
          ) : (
            <div>
              <div className="d-grid gap-2" role="group">
                <a
                  href="/transport/allbids"
                  className="btn"
                  style={{ "background-color": "#22A39F" }}
                >
                  All Open bids
                </a>
                <br />
              </div>
              <div className="d-grid gap-2" role="group">
                <a
                  href="/transport/mybids"
                  className="btn"
                  style={{ "background-color": "#22A39F" }}
                >
                  My bids
                </a>
              </div>
            </div>
          )}
        </Col>
        <Col md={10}>
          <Switch>
            <Route
              exact
              path="/transport/register"
              component={RegistrationForm}
            />
            <Route exact path="/transport/allbids" component={OpenBids} />
            <Route exact path="/transport/mybids" component={MyBids} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default BreederScreen;
