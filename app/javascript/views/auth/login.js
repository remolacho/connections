import React from "react";
import Axios from "axios";
import Toastr from 'toastr';
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";
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
  Row,
  Col,
} from "reactstrap";

import { GlobalContext } from "contexts/global";

export default function Login(){
  const global = React.useContext(GlobalContext)
  const navigate = useNavigate()
  const [_cookies, setCookie] = useCookies()
  const [session, setSession] = React.useState({
    email: '',
    password: ''
  })

  function handleSuccessfulAuth(response) {
    setCookie("authorization", response.data.jwt, {
      maxAge: 30 * 24 * 60 * 60, // 30 days or 1 day
      sameSite: "lax",
      path: "/",
    })
  }
  
  function handleLogin(event) {
    event.preventDefault()
    Axios({
      method: "post",
      url: "/v1/users/signIn",
      data: {
        sign_in: {
          email: session.email,
          password: session.password
        }
      }
    })
    .then(response => {
      if ( response.data.success ) {
        handleSuccessfulAuth(response)
      }
    }).catch(error => {
      if(error.response.status === 401){
        global.handleRemoveCookie(false, error.response.data.message )
      } else {
        Toastr.options.closeButton = true;
        Toastr.options.timeOut = 5000;
        Toastr.options.extendedTimeOut = 1000;
        Toastr.options.positionClass = "toast-bottom-right";
        Toastr.error(errorResponse.response.data.message);
      }
    })
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary cn-shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form onSubmit={e => handleLogin(e)} role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={event => setSession({...session, email: event.target.value})}
                    placeholder="email@domain.com"
                    type="email"
                    autoComplete="new-email"
                    value={ session.email }
                    pattern="[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={event => setSession({...session, password: event.target.value})}
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={ session.password }
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button type="submit" className="my-4" color="info" block>
                  Ingresar
                </Button>
                <Button onClick={() => navigate("/auth/signup")} className="my-4" color="info" outline type="button" block>
                  Crear cuenta
                </Button>
                <Button onClick={() => navigate("/auth/recovery-password")} className="my-4" color="info" outline type="button" block>
                  Recuperar clave
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
