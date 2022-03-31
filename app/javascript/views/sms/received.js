import React from "react"
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
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
          <button className="btn button--secondary">
            Generar Reporte
          </button>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <div className="d-flex align-items-end">
                    <p className="h3 d-inline-block pr-3">Tu número exclusivo de salida de SMS es: </p>
                    <select className="form-control w-auto">
                      <option value="+564423177" defaultValue>+564423177</option>
                      <option value="+564423155" >+564423155</option>
                    </select>
                  </div>
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
                  <th scope="col" className="text-center title-with-sort">
                    Identificador único
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Número de origen
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Proveedor de origen
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Número de destino
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Recibido
                    <i class="fas fa-sort"></i>
                  </th>
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
            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2 <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>
    </Container>
  )
}