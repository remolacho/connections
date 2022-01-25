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
          <h1 className="mb-0">EMAIL desuscritos</h1>
          <Button className="btn-outline-danger">
            Generar reporte
          </Button>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2>Emails</h2>
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
                  <th scope="col" className="text-center">Email de origen</th>
                  <th scope="col" className="text-center">Email de destino</th>
                  <th scope="col" className="text-center">Fecha y hora de registro</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
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