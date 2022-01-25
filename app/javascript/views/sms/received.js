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

export default function Received(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">SMS Recibidos</h1>
          <Button className="btn-outline-danger">
            Generar Reporte
          </Button>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2 className="mb--1">Tu número exclusivo de salida de SMS es: <span className="text-info">+564423177</span></h2>
                  <p>Consulta con nosotros para obtener más número exclusivos </p>
                </Col>
                <Col md='5'>
                  <Input
                      className="form-control-alternative mt-1"
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
                  <th scope="col" className="text-center">Identificador único</th>
                  <th scope="col" className="text-center">Número de origen</th>
                  <th scope="col" className="text-center">Proveedor de origen</th>
                  <th scope="col" className="text-center">Número de destino</th>
                  <th scope="col" className="text-center">Recibido</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      12349u5hn234i5nio23un523593425n9234n502354jn
                    </span>
                  </th>
                  <td className="text-center">+56981213314</td>
                  <td className="text-center">
                    Entel
                  </td>
                  <td className="text-center">
                    +56981213777
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      89ug98dfug897dgyuh784508390jb89j069y87j340356
                    </span>
                  </th>
                  <td className="text-center">+5698122342</td>
                  <td className="text-center">
                    Movistar
                  </td>
                  <td className="text-center">
                    +569812345235
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      23452345dhdg9fh89dfg80hd8tfh0ert053463562562
                    </span>
                  </th>
                  <td className="text-center">+56981213314</td>
                  <td className="text-center">
                    Claro
                  </td>
                  <td className="text-center">
                    +569814443775
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      02359i603458ju6890jyetngh0e9nh97n0897rnh87dfgb
                    </span>
                  </th>
                  <td className="text-center">+56981213377</td>
                  <td className="text-center">
                    Entel
                  </td>
                  <td className="text-center">
                    +5698121333
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      85j9584jt9h3458978ng8the8g7t637bg764bg674767v
                    </span>
                  </th>
                  <td className="text-center">+569812232323</td>
                  <td className="text-center">
                    Entel
                  </td>
                  <td className="text-center">
                    +569812137999
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
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