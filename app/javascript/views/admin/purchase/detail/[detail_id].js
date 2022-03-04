import React from "react"
import { useParams } from "react-router-dom"
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

export default function DetailId(){
  const params = useParams()
  console.log(params) // {detail_id: #}
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Contactos</h1>
          <Button className="btn-outline-danger">
            Agregar contacto
          </Button>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <div className="pb-3">
                    <img
                      alt='ConnectUs'
                      src={require("assets/img/brand/connectus-308x49.png")}
                    />
                  </div>
                  <p className="font-weight-600 text-lg">{params.detail_id}</p>
                </Col>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Detalle</th>
                  <th scope="col" className="text-center">Facturación</th>
                  <th scope="col" className="text-center">Pago</th>
                  <th scope="col" className="text-center">Estado</th>
                  <th scope="col" className="text-center">Factura</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="d-block">
                    <p className="mb-0 font-weight-600">ID: {params.detail_id}</p>
                    <p className="mb-0 font-weight-600">07 oct. 2021 a las 08:48</p>
                    <p className="mb-0 font-weight-600">Beetrack S.A.</p>
                  </th>
                  <td>
                    <p className="mb-0">Beetrack S.A.</p>
                    <p className="mb-0">76.356.306-5</p>
                    <p className="mb-0">Alonso de Córdova 5670, oficina 1504</p>
                    <p className="mb-0">Las Condes</p>
                    <p className="mb-0">payments@beetrack.com</p>
                    <p className="mb-0">56973897003</p>
                  </td>
                  <td>
                    Khipu
                  </td>
                  <td className="text-center text-green">
                    Completada
                  </td>
                  <td>
                    <a href="#" type="button" className="mx-2">
                      <i className="fas fa-file-pdf mr-2"></i>
                      Descargar
                    </a>
                    <a href="#" type="button" className="mx-2 text-red">Imprimir</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card className="shadow mt-5">
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Producto</th>
                  <th scope="col" className="text-center">Cantidad</th>
                  <th scope="col" className="text-center">C/U (CLP)</th>
                  <th scope="col" className="text-center">Precio (CLP)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-center">
                    SMS a Colombia
                  </th>
                  <td className="text-center">
                    7.402
                  </td>
                  <td className="text-center">
                    15.0
                  </td>
                  <td className="text-center">
                    111.030
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
      <Row className="justify-content-end mt-5">
        <Col md="6">
          <div className="p-4 shadow rounded-lg cn-bg-gray-1">
            <div className='d-flex justify-content-between'>
              <p className="d-inline-block m-0 font-weight-600">Total neto:</p>
              <span className='d-inline-block'>
                ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(19000)}
              </span>
            </div>
            <div className='d-flex justify-content-between'>
              <p className="d-inline-block font-weight-600">Impuesto (19%): </p>
              <span className='d-inline-block'>
                ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(3610)}
              </span>
            </div>
            <div className='d-flex justify-content-between'>
              <p className="d-inline-block m-0 h3">Total:</p>
              <span className='d-inline-block h3 text-green'>
                ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(22610)}
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}