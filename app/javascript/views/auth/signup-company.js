import React from "react";
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

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary cn-shadow border-0">
        <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nombre"
                    type="text"
                    autoComplete="Nombre"
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
                    placeholder="Apellido"
                    type="text"
                    autoComplete="Apellido"
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
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
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
                    placeholder="Empresa"
                    type="text"
                    autoComplete="Empresa"
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
                    placeholder="Rut Empresa o Identif. Tributaria"
                    type="text"
                    autoComplete="Rut Empresa o Identif. Tributaria"
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
                  <input type="text" className="form-control pl-2" placeholder="1 234 567" required />
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
                    placeholder="Contrase??a"
                    type="password"
                    autoComplete="Contrase??a"
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
                    placeholder="Repetir Contrase??a"
                    type="password"
                    autoComplete="Repetir Contrase??a"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="info" type="button" block>
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
