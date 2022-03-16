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
  Input,
  Modal
} from "reactstrap";

export default function Index(){
  const [showModalListContact, setShowModalListContact] = React.useState(false)

  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Contactos</h1>
          <Button onClick={() => setShowModalListContact(!showModalListContact)} className="btn-outline-danger">
            Agregar contacto
          </Button>
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
                  <th scope="col" className="text-center">Nombre</th>
                  <th scope="col" className="text-center">Tipo</th>
                  <th scope="col" className="text-center">Número de contacto</th>
                  <th scope="col" className="text-center">Subido</th>
                  <th scope="col" className="text-center">última actualización</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono</td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono </td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono </td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono </td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono </td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
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

      {/*  Modal List Contact - START  */}
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={showModalListContact}
        toggle={() => setShowModalListContact(!showModalListContact)}
      >
        <div className="modal-header">
          <h6 className="modal-title text-lg" id="modal-title-default">
            Lista de contactos
          </h6>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setShowModalListContact(!showModalListContact)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="align-items-center font-weight-600 text-sm d-flex">
            <span 
              className="align-items-center bg-info text-sm text-white d-flex justify-content-center mr-2 rounded-circle" 
              style={{height: '24px', width: '24px'}}>
              1
            </span>
            Crear Lista
          </p>
          <div className="alert fade show" role="alert" style={{ backgroundColor: "#C1D5FC", borderColor: "#C1D5FC" }}>
            <span className="d-inline-block">
              El primer encabezado de la <strong>primera columna</strong> deber decir <strong>"telefono" o "email"</strong>
            </span>
            <button
              aria-label="Close Alert"
              className="close"
              type="button"
            >
              <span className="text-white" aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="alert fade show" role="alert" style={{ backgroundColor: "#C1D5FC", borderColor: "#C1D5FC" }}>
            <span className="d-inline-block">
              <strong>CSV</strong> El archivo en formato
            </span>
            <button
              aria-label="Close Alert"
              className="close"
              type="button"
            >
              <span className="text-white" aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="my-4 text-center">
            <img
              alt="Ejemplo CSV"
              className=""
              src={require("assets/img/spreadsheet.png")}
            />
            <p className="my-2">Ejemplo CSV</p>
            <Button 
              color="warning" 
              type="button"
              className="my-2"
            >
              Descargar CSV Ejemplo
            </Button>
          </div>
          <p className="align-items-center font-weight-600 text-sm d-flex">
            <span 
              className="align-items-center bg-info text-sm text-white d-flex justify-content-center mr-2 rounded-circle" 
              style={{height: '24px', width: '24px'}}>
              2
            </span>
            Cargar Archivo
          </p>
          <form>
            <div className="form-group mb-2">
              <label htmlFor="name-list" className="font-weight-600 text-sm">Mi lista de contactos</label>
              <input type="email" className="form-control" id="name-list" placeholder="Mi lista de contactos" />
            </div>
            <div className="form-group">
              <label htmlFor="file-list" className="font-weight-600 text-sm">Lista</label>
              <input type="file" className="form-control-file" id="file-list" />
            </div>
          </form>
          <div className="text-center">
            <svg className="mx-2 mb-1 fill-current">
              <use xlinkHref="#error" />
            </svg>
            <p className="text-xl mb-1 font-weight-600">La lista no se cargó</p>
            <p>La lista ingresada tiene los siguientes errores...</p>
          </div>
          <div className="alert fade show" role="alert" style={{ backgroundColor: "#C1D5FC", borderColor: "#C1D5FC" }}>
            <span className="d-inline-block">
              La fila 43 presenta caracteres que <strong>no cumplen UTF-8</strong>
            </span>
            <button
              aria-label="Close Alert"
              className="close"
              type="button"
            >
              <span className="text-white" aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="text-center">
            <svg className="mx-2 mb-1 fill-current">
              <use xlinkHref="#confirmation" />
            </svg>
            <p className="text-xl mb-1 font-weight-600">La lista fue cargada</p>
            <p>La lista ingresada fue cargada con éxito!</p>
          </div>
        </div>
        <div className="modal-footer">
          <Button color="info" type="button">
            Aceptar
          </Button>
          <Button
            className="ml-auto"
            color="link"
            data-dismiss="modal"
            type="button"
            onClick={() => setShowModalListContact(!showModalListContact)}
          >
            Cancelar
          </Button>
        </div>
      </Modal>
      {/*  Modal List Contact - END  */}

    </Container>
  )
}