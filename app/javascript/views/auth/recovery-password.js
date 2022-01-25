import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

export default function RecoveryPassword(){
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary cn-shadow border-0">
        <CardHeader className="bg-transparent text-center pb-0">
          <h1 className="py-3">Revisa tu correo y sigue las instrucciones</h1>
          <p className="text-center mt-2">
            Te enviaremos un enlace a tu correo para que puedas cambiar la contraseña
          </p>
        </CardHeader>
        <CardBody className="px-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="info" type="button" block>
                  Cambiar mi contraseña
                </Button>
                <Button className="my-4" color="info" outline type="button" block>
                  Regresar
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
