import React from "react";
import RegistrationForm from "../components/Breeder/RegistrationForm";
import BreederForm from "../components/Breeder/BreederForm";
import PastSeeds from "../components/Breeder/PastSeeds";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const BreederScreen = () => {
  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;

  return (
    <Container>
      <Row>
        <h1 className="text-center p-2 ">Breeder Panel</h1>
        <br />
        <Col md={2}>
          {userInfo.isBreeder ? (
            <div>
              <div className="d-grid gap-2" role="group">
                <a href="/breeder/breederForm" className="btn" style={{'background-color':'#22A39F'}}>
                  Breeder's Form
                </a>
                <br />
              </div>
              <div className="d-grid gap-2" role="group">
                <a href="/breeder/myseeds" className="btn" style={{'background-color':'#22A39F'}}>
                  Past Seeds
                </a>
              </div>
            </div>
          ) : (
            <div className="d-grid gap-2" role="group">
              <a href="/breeder/register" className="btn" style={{'background-color':'#22A39F'}}>
                Registration Form
              </a>
              <br />
            </div>
          )}
        </Col>
        <Col md={10}>
          <Switch>
            <Route
              exact
              path="/breeder/register"
              component={RegistrationForm}
            />
            <Route exact path="/breeder/breederForm" component={BreederForm} />
            <Route exact path="/breeder/myseeds" component={PastSeeds} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default BreederScreen;
