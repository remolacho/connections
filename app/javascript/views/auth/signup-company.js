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
  const [countries, setCountries] = React.useState([])
  const [selectedCountry, setSelectedCountry] = React.useState({})
  const [session, setSession] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    enterprise_name: '',
    rut: '',
    country_id: null,
    phone: '',
    password: '',
    password_confirmation: '',
  })
  
  React.useEffect(() => {
    Axios({
      method: "get",
      url: "/v1/addresses/countries/list",
    }).then(response => {
      if(response.data.success) {
        let listCountries = response.data.data
        setCountries(listCountries)
        setSelectedCountry(listCountries.find(country => country.id == parseInt(listCountries[0].id)))
      }
    }).catch(error => {
      console.log(error.response.data.message)
      setCountries([])
    })
  }, [])

  function handleSelectCountry(event){
    setSession({ ...session, country_id: parseInt(event.target.value) })
    setSelectedCountry(countries.find(country => country.id == parseInt(event.target.value)))
  }

  function handleSignUp(event) {
    event.preventDefault()
    Axios({
      method: "post",
      url: "/v1/users/signUp",
      data: {
        sign_up: { 
          ...session,
          phone: selectedCountry.code + session.phone
        }
      }
    })
    .then(response => {
      if ( response.data.success ) {
        Toastr.options.closeButton = true;
        Toastr.options.timeOut = 5000;
        Toastr.options.extendedTimeOut = 1000;
        Toastr.options.positionClass = "toast-bottom-right";
        Toastr.success(response.data.message);
        navigate("/auth/login")
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
                <select onChange={ event => handleSelectCountry(event) } className="form-control">
                  { countries.map((country, index) => (
                    <option value={country.id} key={`C#${index}`} >{country.name}</option>
                  )) }
                </select>
              </FormGroup>
              <FormGroup className="mb-3">
                <div className="input-group has-validation">
                  <div className="input-group-prepend border-right">
                    <span className="input-group-text">+{selectedCountry.code || '00'}</span>
                  </div>
                  <input 
                    onChange={ event => setSession({...session, phone: event.target.value})}
                    value={ session.phone }
                    type="text"
                    className="form-control pl-2"
                    maxLength={ selectedCountry.number_length }
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
                <button type="submit" className="btn button--primary my-4 btn-block">
                  Crear cuenta
                </button>
                <button 
                  onClick={() => navigate("/auth/signup")} 
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
