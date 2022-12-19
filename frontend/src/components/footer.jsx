import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <>
      <footer
        class="text-center text-lg-start p-2 text-black"
        style={{ "background-color": "#22A39F"}}
      >
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Agrobuy</h6>
                <p>
                  AgroBuy is deployed in a P2P (Peer-to-Peer) network and runs
                  on a two-phase verification system with four main nodes (FCI,
                  Farmer, Warehouse, Transport) in the chain
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Farmer Portal
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Breeder Portal
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Transport Portal
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3 text-secondary"></i>Patiala, PB, IN
                </p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  support@agrobuy.com
                </p>
                <p>
                  <i class="fas fa-phone me-3 text-secondary"></i>+91-1234567890
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          © 2021 Copyright:&nbsp;
          <a class="text-reset fw-bold" href="/">
            Agrobuy
          </a>
        </div>
      </footer>
    </>
  );
};

export default footer;
