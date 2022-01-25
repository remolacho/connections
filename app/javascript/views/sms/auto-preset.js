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

export default function AutoPreset(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">SMS automáticos y predefinidos</h1>
          <Button className="btn-outline-danger">
            Enviar SMS
          </Button>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2>Mensajes</h2>
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
            {/* <Row>
              <Col md='12'> */}
                <Table className="align-items-center table-flush" responsive borderless>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="text-center">Nombre</th>
                      <th scope="col" className="text-center">Contenido</th>
                      <th scope="col" className="text-center">SMS automático</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              {/* </Col>
            </Row> */}
          </Card>
        </div>
      </Row>
    </Container>
  )
}