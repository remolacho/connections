import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Row } from "reactstrap";

export default function Auth(){

  React.useEffect(() => {
    document.body.classList.add("bg-gradient-info");
    return () => {
      document.body.classList.remove("bg-gradient-info");
    };
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="header bg-white py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <img
                  alt='ConnectUs'
                  src={require("assets/img/brand/connectus-308x49.png")}
                />
              </Row>
            </div>
          </Container>
          <div className="d-none d-sm-block separator separator-bottom separator-skew bg-gradient-info zindex-100" style={{ height: '58px'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              transform="scale(1, -1) translate(0, 0)"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            
            {/* Page content */}
            <Outlet />

          </Row>
        </Container>
      </div>
    </>
  );
};

