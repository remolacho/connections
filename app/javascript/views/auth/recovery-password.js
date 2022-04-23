import React from "react";
import Axios from "axios";
import Toastr from "toastr";
import { useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()
  const [email, setEmail] =  React.useState('')

  function handleRecovery(event){
    event.preventDefault()
    Axios({
      method: "post",
      url: "/v1/users/recover-password",
      data: {
        recover_password: {
          email
        }
      }
    })
    .then(response => {
      if( response.data.success ){
        Toastr.options.closeButton = true;
        Toastr.options.timeOut = 5000;
        Toastr.options.extendedTimeOut = 1000;
        Toastr.options.positionClass = "toast-bottom-right";
        Toastr.success(response.data.message);
      }
    }).catch(error => {
      Toastr.options.closeButton = true;
      Toastr.options.timeOut = 5000;
      Toastr.options.extendedTimeOut = 1000;
      Toastr.options.positionClass = "toast-bottom-right";
      Toastr.error(error.response.data.message);
    })
  }

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
            <Form onSubmit={e => handleRecovery(e)} role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={event => setEmail(event.target.value)}
                    value={ email }
                    pattern="[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}"
                    placeholder="email@domain.com"
                    type="email"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button type="submit" className="btn button--primary my-4 btn-block">
                  Cambiar mi contraseña
                </Button>
                <button 
                  onClick={() => navigate("/auth/login")} 
                  className="btn button--default my-4 btn-block" 
                >
                  Regresar
                </button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
