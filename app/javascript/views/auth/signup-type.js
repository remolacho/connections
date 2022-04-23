import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
} from "reactstrap";

export default function SignupType(){
  const navigate = useNavigate()
  const [type, setType] = React.useState("user")

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary cn-shadow border-0">
          <CardHeader className="bg-transparent text-center pb-0">
            <h1 className="py-3">Seleccionar tipo de cuenta</h1>
          </CardHeader>
          <CardBody className="px-lg-5">
            <div className="custom-control custom-control-alternative custom-radio mb-3">
              <input
                onChange={() => setType('company')}
                className="custom-control-input"
                id="customRadio1"
                name="custom-radio-1"
                type="radio"
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                <i className="ni ni-building mr-2"></i>
                Empresa
              </label>
            </div>
            <div className="custom-control custom-control-alternative custom-radio mb-3">
              <input
                onChange={() => setType('user')}
                className="custom-control-input"
                defaultChecked
                id="customRadio2"
                name="custom-radio-1"
                type="radio"
              />
              <label className="custom-control-label" htmlFor="customRadio2">
                <i className="ni ni-single-02 mr-2"></i>
                Persona Natural
              </label>
            </div>
            <div className="text-center">
              <button 
                onClick={() => navigate("/auth/signup/" + type)} 
                className="btn button--primary my-4 btn-block"
              >
                Crear cuenta
              </button>
              <button 
                onClick={() => navigate("/auth/login")} 
                className="btn button--default my-4 btn-block" 
              >
                Regresar
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
