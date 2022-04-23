import React from 'react'
import Axios from "axios";
import Toastr from "toastr";
import { useSearchParams, useNavigate } from "react-router-dom"
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

export default function PasswordChange(){
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const [session, setSession] = React.useState({
    recover_token: searchParams.get('token'),
    password: '',
    password_confirmation: ''
  })

  function handlePasswordChange(event){
    event.preventDefault()
    Axios({
      method: "post",
      url: "/v1/users/change-password",
      data: {
        change_password: {
          ...session
        }
      }
    })
    .then(response => {
      if(response.data.success) {
        Toastr.options.closeButton = true;
        Toastr.options.timeOut = 5000;
        Toastr.options.extendedTimeOut = 1000;
        Toastr.options.positionClass = "toast-bottom-right";
        Toastr.success(response.data.message);
        navigate('/auth')
      }
    }).catch(error => {
      Toastr.options.closeButton = true;
      Toastr.options.timeOut = 5000;
      Toastr.options.extendedTimeOut = 1000;
      Toastr.options.positionClass = "toast-bottom-right";
      Toastr.error(error.response.data.message);
    })
  }

  return(
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary cn-shadow border-0">
        <CardHeader className="bg-transparent text-center pb-0">
          <h1 className="py-3">Estás a punto de cambiar tu contraseña</h1>
          <p className="text-center mt-2">
            Al terminar, te enviaremos a iniciar sesión de nuevo con tu nueva contraseña
          </p>
        </CardHeader>
        <CardBody className="px-lg-5">
            <Form onSubmit={e => handlePasswordChange(e)} role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={event => setSession({...session, password: event.target.value})}
                    value={session.password}
                    placeholder="Contraseña"
                    type="password"
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
                    onChange={event => setSession({...session, password_confirmation: event.target.value})}
                    value={session.password_confirmation}
                    placeholder="Repetir Contraseña"
                    type="password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="info" type="submit" block>
                  Cambiar mi contraseña
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}