import React from "react";
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

export default function Login(){
  const navigate = useNavigate()
  const [session, setSession] = React.useState({
    email: '',
    pass: '',
    remember_me: false
  })

  function handleLogin(event) {
    event.preventDefault()
    console.log(session)
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
                    onChange={event => setSession({...session, pass: event.target.value})}
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    value={ session.pass }
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  onChange={event => setSession({...session, remember_me: event.target.checked})}
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
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
