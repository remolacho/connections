import React from "react"
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  Button,
  Input
} from "reactstrap";

export default function Unsubscribed(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Numeros Desuscritos</h1>
          <Button className="btn-outline-danger">
            Agregar numero
          </Button>
        </div>
        <hr className="mt-3"/>
      {/* <Row className="mb-4">
        <Col>
          <div className="d-flex align-items-end">
            <p className="h3 d-inline-block pr-3">Tu correo de origen es:</p>
            <select className="form-control w-auto">
              <option value="correo1@gmail.com" defaultValue>correo1@gmail.com</option>
              <option value="correo2@gmail.com" >correo2@gmail.com</option>
            </select>
          </div>
        </Col>
      </Row> */}
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  {/* <h2>Emails</h2> */}
                </Col>
                <Col md='5'>
                  <Input
                      className="form-control-alternative"
                      id="input-phone"
                      placeholder="Buscar"
                      type="text"
                    />
                </Col>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Numero de usuario</th>
                  <th scope="col" className="text-center">Numero de origen</th>
                  <th scope="col" className="text-center">Proveedor de origen</th>
                  <th scope="col" className="text-center">Fecha y hora de ingreso</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-center font-weight-300">
                    +56981213314
                  </th>
                  <td className="text-center">
                    +56981213314
                  </td>
                  <td className="text-center">
                    Entel
                  </td>
                  <td className="text-center">
                    23/09/21 14:38
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-center font-weight-300">
                    +56981213314
                  </th>
                  <td className="text-center">
                    +56981213314
                  </td>
                  <td className="text-center">
                    Entel
                  </td>
                  <td className="text-center">
                    23/09/21 14:38
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-center font-weight-300">
                    +56981213314
                  </th>
                  <td className="text-center">
                    +56981213314
                  </td>
                  <td className="text-center">
                    Movistar
                  </td>
                  <td className="text-center">
                    23/09/21 14:38
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-center font-weight-300">
                    +56981213314
                  </th>
                  <td className="text-center">
                    +56981213314
                  </td>
                  <td className="text-center">
                    Claro
                  </td>
                  <td className="text-center">
                    23/09/21 14:38
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-center font-weight-300">
                    +56981213314
                  </th>
                  <td className="text-center">
                    +56981213314
                  </td>
                  <td className="text-center">
                    Movistar
                  </td>
                  <td className="text-center">
                    23/09/21 14:38
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
    </Container>
  )
}