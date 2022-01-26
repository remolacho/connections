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

export default function ShippedScheduled(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Historial de compras</h1>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md={{size:"5" , offset: "7"}}>
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
                  <th scope="col" className="text-center">Identificador único</th>
                  <th scope="col" className="text-center">Fecha</th>
                  <th scope="col" className="text-center">Pago</th>
                  <th scope="col" className="text-center">Estado</th>
                  <th scope="col" className="text-center">Factura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      hjb24ryqfu934nf39nf93nf934n90f
                    </span>
                  </th>
                  <td className="text-center">22/09/21 18:15</td>
                  <td className="text-center">
                    Khipu
                  </td>
                  <td className="text-center text-green">
                    Completa
                  </td>
                  <td className="text-center">
                    <a href="#">Descargar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      hjb24ryqfu934nf39nf93nf934n90f
                    </span>
                  </th>
                  <td className="text-center">22/09/21 18:15</td>
                  <td className="text-center">Paypal</td>
                  <td className="text-center text-red">Pendiente</td>
                  <td className="text-center">
                    <a href="#">Descargar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      3df34fw345fw34fw3f4fw34fwfertgewt
                    </span>
                  </th>
                  <td className="text-center">22/09/21 18:15</td>
                  <td className="text-center">Transferencia Bancaria</td>
                  <td className="text-center text-green">Pendiente</td>
                  <td className="text-center">
                    <a href="#">Descargar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      9dfg90dfg090h9dfg0h09dfg90h90dfg90h
                    </span>
                  </th>
                  <td className="text-center">22/09/21 18:15</td>
                  <td className="text-center">Khipu</td>
                  <td className="text-center text-red">Incompleta</td>
                  <td className="text-center">
                    <a href="#">Descargar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      78sdf78fsdgsdf78g87sdf78g78sdfg78sdff
                    </span>
                  </th>
                  <td className="text-center">22/09/21 18:15</td>
                  <td className="text-center">Paylap</td>
                  <td className="text-center text-green">Completa</td>
                  <td className="text-center">
                    <a href="#">Descargar</a>
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