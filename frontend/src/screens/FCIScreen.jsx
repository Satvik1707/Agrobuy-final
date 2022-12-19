import React from "react";
import { Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import BreederList from "../components/FCI/BreederList";
import TransportList from "../components/FCI/TransportList";
import Breeder from "../components/FCI/Breeder";
import Transport from "../components/FCI/Transport";
import CreateBid from "../components/FCI/CreateBid";
import AllBids from "../components/FCI/AllBids";
import OpenBids from "../components/FCI/OpenBids";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SeedsList from "../components/FCI/SeedsList";
import AllSeeds from "../components/FCI/Seeds";
import AddWarehouse from "../components/FCI/AddWarehouse";
import ApprovedWarehouse from "../components/FCI/ApprovedWarehouse";

const FCIScreen = (history) => {
  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;
  useEffect(() => {
    if (localStorage.getItem("userInfo") === null || !userInfo.isFCI) {
      window.location.href = "/ ";
    }
  });
  return (
    <div>
      <Row>
        <h1 className="text-center p-2 ">FCI Panel</h1>

        <br />
        <Col md={2}>
          <div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/breederlist"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Breeder Application request
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/transportlist"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Transport Application request
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/breeder"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Approved Breeder
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/transport"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Approved Transport
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/seedslist"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Seeds Approval Request
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/seeds"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Seeds Approved
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/createbid"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Create a New Bid
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/openbids"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Open Bids
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/allbids"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Closed Bids
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/addwarehouse"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Add Warehouse
              </a>
              <br />
            </div>
            <div className="d-grid gap-2" role="group">
              <a
                href="/fci/approvedwarehouse"
                className="btn"
                style={{ "background-color": "#22A39F" }}
              >
                Approved Warehouse
              </a>
              <br />
            </div>
          </div>
        </Col>

        <Col md={10}>
          <Switch>
            <Route exact path="/fci/addwarehouse" component={AddWarehouse} />
            <Route exact path="/fci/approvedwarehouse" component={ApprovedWarehouse} />
            <Route exact path="/fci/breederlist" component={BreederList} />
            <Route exact path="/fci/transportlist" component={TransportList} />
            <Route exact path="/fci/breeder" component={Breeder} />
            <Route exact path="/fci/transport" component={Transport} />
            <Route exact path="/fci/createbid" component={CreateBid} />
            <Route exact path="/fci/openbids" component={OpenBids} />
            <Route exact path="/fci/allbids" component={AllBids} />
            <Route exact path="/fci/seedslist" component={SeedsList} />
            <Route exact path="/fci/seeds" component={AllSeeds} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default FCIScreen;
