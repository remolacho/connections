import React from "react"
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Media,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Carousel,
  CarouselIndicators,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

export default function Index(){
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

    // Carousel Logic - START

  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);
  // State for Animation
  const [animating, setAnimating] = React.useState(false);
  // // Sample items for Carousel

  const items = [
    {
      image: 'Slide 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula ex nisl, eu sodales mauris dictum nec.'
    },
    {
      image: 'Slide 2',
      text: 'consectetur adipiscing elit. Lorem ipsum dolor sit amet, Curabitur vehicula ex nisl, eu sodales mauris dictum nec.'
    },
    {
      image: 'Slide 3',
      text: 'Curabitur vehicula ex nisl, eu sodales mauris dictum nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  // Items array length
  const itemLength = items.length - 1

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    
    setActiveIndex(nextIndex);
  }

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    
    setActiveIndex(nextIndex);
  }

  // Carousel Logic - END

  return (
    <>
      {/* Card stats */}
      <Row>
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Saldo Actual
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(380774)}
                      <br/>
                      <span className="h2">
                        créditos
                      </span>
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              {/* <Progress
                max="100"
                value="70"
                barClassName="bg-gradient-success"
                className="my-2"
                style={{ height: '4px' }}
              /> */}
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Tasa de envio
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      3.580 / 3.620
                      <br/>
                      <span className="text-green text-xs">98%</span>
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              {/* <span className="d-block my-2" style={{ height: '4px'}}></span> */}
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Saldo SMS
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      <i className="fas fa-comment fa-1x mr-3" style={{ transform: 'scale(-1, 1) translate(0, 0)' }}></i>
                      {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(3580)}
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              <span className="d-block my-2" style={{ height: '4px'}}></span>
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Saldo Email
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      <i className="fas fa-envelope fa-1x mr-3"></i>
                      {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12580)}
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              <span className="d-block my-2" style={{ height: '4px'}}></span>
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* content */}
      <div className="mt-5 row">
        <div className="col-md-6 mb-5 mb-xl-0">
          <Card className="bg-white shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Overview
                  </h6>
                  <h2 className="mb-0">Envio de mensajes</h2>
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              {/* Chart */}
              <div className="chart">
                <Line
                  data={chartExample1[chartExample1Data]}
                  options={chartExample1.options}
                  getDatasetAtEvent={(e) => console.log(e)}
                />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6 mb-5 mb-xl-0">
              <Card className="bg-white shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">
                        <i className="far fa-life-ring fa-1x mr-3"></i>
                        Soporte
                      </h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="secondary"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Ver más
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row className="mb-4">
                    <Col>
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Telefono
                      </h6>
                      <a className="mb-0">(+56) 9 9441 2372</a>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Email
                      </h6>
                      <a className="mb-0">contacto@connectus.cl</a>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-6 mb-5 mb-xl-0">
              <Card className="bg-white shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">
                        <i className="far fa-life-ring fa-1x mr-3"></i>
                        Documentación
                      </h3>
                    </div>
                    <div className="text-right pr-2">
                      <Button
                        color="secondary"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Ver más
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Row className="mb-4">
                    <Col>
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Manual de uso de API
                      </h6>
                      <a className="mb-0">Integre sus aplicaciones</a>
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col>
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Manula de plataforma
                      </h6>
                      <a className="mb-0">Aprenda a usar la plataforma</a>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 mb-xl-0">
              <Card className="shadow bg-gradient-info p-4 border-0">
                <Row>
                  <Col>
                    <h2 className="text-white">Recomendaciones</h2>
                  </Col>
                </Row>
                <Carousel 
                  previous={previousButton} 
                  next={nextButton}
                  activeIndex={activeIndex}
                >
                  <CarouselIndicators 
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                      if (animating) return;
                      setActiveIndex(newIndex);
                    }} 
                  />
                    { items.map((item, key) => (
                      <CarouselItem
                        key={key}
                        onExited={() => setAnimating(false)}
                        onExiting={() => setAnimating(true)}
                      >
                        <Row className="pb-5">
                          <Col className="mb-5 mb-xl-0" xl="5">
                            <div className="d-flex justify-content-center">
                              <svg className="mx-2 mb-1 fill-current">
                                <use xlinkHref="#confirmation" />
                              </svg>
                            </div>
                          </Col>
                          <Col className="mb-5 mb-xl-0" xl="7">
                            <p className="h3">
                              {item.text}
                            </p>
                          </Col>
                        </Row>
                      </CarouselItem>
                    ))}
                  <CarouselControl 
                    directionText="Prev"
                    direction="prev" 
                    onClickHandler={previousButton} 
                  />
                  <CarouselControl 
                    directionText="Next"
                    direction="next" 
                    onClickHandler={nextButton} 
                  />
                </Carousel>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    134 Mensajes
                  </h6>
                  <h3 className="mb-0">Últimos Mensajes</h3>
                </div>
                <div className="col text-right">
                  <Button
                    color="secondary"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Ver más
                  </Button>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="sm" className="align-items-center table-flush" responsive>
              <tbody>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso de Cierre Furnat
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso de Cierre Furnat
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Prueba 1
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso Claro
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso de Cierre Furnat
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso Claro
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso de Cierre Furnat
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  )
}
