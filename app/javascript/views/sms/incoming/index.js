import React, { useEffect, useState } from "react"
import Pagination from "../../../components/shared/pagination"
import axios from '../../../utilities/auth-axios'
import {
  Card,
  CardHeader,
  CardFooter,
  Table,
  Container,
  Row,
  Col,
  Button,
  Input
} from "reactstrap";

import { number } from "prop-types";
import { get } from "jquery";
import { formatTimeStamptToDate } from "../../../utilities/shared";
import { Link } from "react-router-dom";

export default function SMSIncoming(){
  const [currentPage, setCurrentPage] = useState(1)
  const [numbers, setNumbers] = useState([])
  const [incomingSMS, setIncomingSMS] = useState([])
  const [pagination, setPagination] = useState({})

  async function setData(){
    await axios.get("/numbers")
    .then(({data:{data:results}}) => {
      setNumbers(results)
      axios.get("/sms/incoming", {params: {page: currentPage}})
      .then((response) => {
        setIncomingSMS(response.data.data)
        setPagination(response.data.meta_data)
      })
    })
  }
  
  function searchSMS(e){
    if (e.key == "Enter") {
      axios.get("/sms/incoming", {params: {search: e.target.value}})
      .then((response) => {
        setIncomingSMS(response.data.data)
        setPagination(response.data.meta_data)
      })
    }
  }

  function setSMSByNumber(e){
    setCurrentPage(1)
    axios.get("/sms/incoming", {params: {account_number: e.target.value, page: currentPage}})
    .then((response) => {
      setIncomingSMS(response.data.data)
      setPagination(response.data.meta_data)
    })
  }

  function downloadReport(){
    axios.get("/sms/incoming/download_report.xlsx", {
      responseType: 'arraybuffer',
      headers: {
        accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      }
    })
    .then(response => {
      const blob = new Blob(
        [response.data],
        { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
      )
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `Reporte_de_recibidos_${new Date(Date.now()).toLocaleDateString()}.xlsx`;
      link.click();
    })
  }

  useEffect(() => setData(), [currentPage])

  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">SMS Recibidos</h1>
          <a className="btn button--secondary" onClick={() => downloadReport()}>
            Generar Reporte
          </a>
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
                    <select className="form-control w-auto px-2 py-0" onChange={(e) => setSMSByNumber(e)}>
                      { 
                        numbers.map((number) => (
                          <option key={number.id} value={number.elastic_number}>{`+${number.elastic_number}`}</option>
                        ))
                      }
                      <option value={""}>Todos</option>
                    </select>
                  </div>
                  <p className="mt-3">Consulta con nosotros para obtener más número exclusivos </p>
                </Col>
                <Col md='5'>
                  <Input
                    className="form-control-alternative mt-1"
                    id="input-search"
                    placeholder="Buscar"
                    type="text"
                    onKeyPress={(e) => searchSMS(e)}
                  />
                </Col>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center title-with-sort">
                    Identificador único
                    
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Número de origen
                    
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Proveedor de origen
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Número de destino
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Recibido
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  incomingSMS.map((sms) => (
                    <tr key={sms.id_unique}>
                      <td scope="row">
                        <Link to={sms.id_unique} className="mb-0 text-sm text-center d-block text-info">
                          {sms.id_unique}
                        </Link>
                      </td>
                      <td className="text-center">{`+${sms.src_number}`}</td>
                      <td className="text-center">{sms.src_provider}</td>
                      <td className="text-center">{`+${sms.dst_number}`}</td>
                      <td className="text-center">{formatTimeStamptToDate(sms.created_at)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <CardFooter className="py-4">
              <Pagination numPages={pagination.total_pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </CardFooter>
          </Card>
        </div>
      </Row>
    </Container>
  )
}
