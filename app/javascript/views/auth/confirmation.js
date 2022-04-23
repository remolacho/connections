import React from 'react'
import Axios from "axios";
import Toastr from "toastr";
import { useSearchParams, useNavigate } from "react-router-dom"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
} from "reactstrap";

export default function Confirmation(){
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const [message, setMessage] = React.useState('')
  let tokenExists = false
  
  tokenExists = searchParams.get('token') !== null ? true : false
  
  if(tokenExists) {
    React.useEffect(() => {
      Axios({
        method: "post",
        url: "/v1/users/confirmation",
        data: {
          confirmation: {
            token: searchParams.get('token')
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
          setMessage(response.data.message)
        }
      }).catch(error => {
        Toastr.options.closeButton = true;
        Toastr.options.timeOut = 5000;
        Toastr.options.extendedTimeOut = 1000;
        Toastr.options.positionClass = "toast-bottom-right";
        Toastr.error(error.response.data.message);
        setMessage(error.response.data.message)
      })
    }, [])
  }
  
  return(
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary cn-shadow border-0">
          <CardHeader className="bg-transparent text-center pb-0">
            { tokenExists ? 
              <>
                <h1 className="py-3">¡Felicidades!</h1>
                <p className="text-center mt-2">
                  Su correo electrónico ya ha sido confirmado. Ya puedes iniciar sesión en la aplicación
                  { message }
                </p>
              </>
              :
              <>
                <h1 className="py-3">¡Error!</h1>
                <p className="text-center mt-2">
                  Necesitas de un token para confirmar tu correo electrónico. Por favor contacte con un administrador.
                </p>
              </>
            }
          </CardHeader>
          <CardBody className="px-lg-5">
            <div className="text-center">
              <button 
                onClick={() => navigate("/auth/login")} 
                className="btn button--primary my-4 btn-block"
              >
                Iniciar Session
              </button>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}
