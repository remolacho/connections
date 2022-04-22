import React from "react";
import Axios from "axios";
import Toastr from "toastr";
import { useNavigate } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

export default function SignupCompany(){
  const navigate = useNavigate()
  const [session, setSession] = React.useState({
    first_name: 'paulo',
    last_name: 'adrian',
    email: '1234@gmail.com',
    enterprise_name: '11',
    rut: '70761142',
    country_id: 1,
    phone: '990449006',
    password: 'qwerty',
    password_confirmation: 'qwerty',
  })

  function handleSignUp(event) {
    event.preventDefault()
    console.log(session)
    Axios({
      method: "post",
      url: "/v1/users/signUp",
      data: {
        sign_up: { ...session }
      }
    })
    .then(response => {
      if ( response.data.success ) {
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
        <CardBody className="px-lg-5 py-lg-5">
            <Form onSubmit={e => handleSignUp(e)} role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={ event => setSession({...session, first_name: event.target.value})}
                    value={ session.first_name }
                    placeholder="Nombre"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={ event => setSession({...session, last_name: event.target.value})}
                    value={ session.last_name }
                    placeholder="Apellido"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={ event => setSession({...session, email: event.target.value})}
                    value={ session.email }
                    placeholder="Email"
                    type="email"
                    pattern="[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,4}"
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={ event => setSession({...session, enterprise_name: event.target.value})}
                    value={ session.enterprise_name }
                    placeholder="Empresa"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={ event => setSession({...session, rut: event.target.value})}
                    value={ session.rut }
                    placeholder="Rut Empresa o Identif. Tributaria"
                    type="text"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-3">
                <select className="form-control">
                  <option value="chile" defaultValue>Chile</option>
                  <option value="argentina" >Argentina</option>
                  <option value="bolivia">Bolivia</option>
                  <option value="brasil">Brasil</option>
                  <option value="colombia">Colombia</option>
                  <option value="costa-rica">Costa Rica</option>
                  <option value="ecuador">Ecuador</option>
                  <option value="eeuu">EEUU</option>
                  <option value="espana">Espana</option>
                  <option value="guatemala">Guatemala</option>
                  <option value="mexico">Mexico</option>
                  <option value="paraguay">Paraguay</option>
                  <option value="peru">Peru</option>
                  <option value="suecia">Suecia</option>
                  <option value="uruguay">Uruguay</option>
                </select>
              </FormGroup>
              <FormGroup className="mb-3">
                <div className="input-group has-validation">
                  <div className="input-group-prepend border-right">
                    <span className="input-group-text">+56</span>
                  </div>
                  <input 
                    onChange={ event => setSession({...session, phone: event.target.value})}
                    value={ session.phone }
                    type="text" 
                    className="form-control pl-2" 
                    placeholder="1 234 567" 
                    required 
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    onChange={ event => setSession({...session, password: event.target.value})}
                    value={ session.password }
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
                    onChange={ event => setSession({...session, password_confirmation: event.target.value})}
                    value={ session.password_confirmation }
                    placeholder="Repetir Contraseña"
                    type="password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="info" type="submit" block>
                  Crear cuenta
                </Button>
                <Button onClick={() => navigate("/auth/signup")} className="my-4" color="info" outline type="button" block>
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
