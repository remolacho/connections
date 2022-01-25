import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
} from "reactstrap";

export default function SelectType(){
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary cn-shadow border-0">
          <CardHeader className="bg-transparent text-center pb-0">
            <h1 className="py-3">Seleccionar tipo de cuenta</h1>
          </CardHeader>
          <CardBody className="px-lg-5">
            <input type="radio" id="type1" name="type" value="Empresa" />
            <label for="type1" className="ml-2">
              <i className="ni ni-building mr-2"></i>
              Empresa
            </label>
            <br />
            <input type="radio" id="type2" name="type" value="Persona Natural" />
            <label for="type2" className="ml-2">
              <i className="ni ni-single-02 mr-2"></i>
              Persona Natural
            </label>
            <br />  
            <div className="text-center">
              <Button className="my-4" color="info" type="button" block>
                Crear cuenta
              </Button>
              <Button className="my-4" color="info" outline type="button" block>
                Regresar
              </Button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
