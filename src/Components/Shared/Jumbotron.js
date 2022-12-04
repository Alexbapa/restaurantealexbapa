import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Jumbotron = () =>{
  return (
    <Container>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }} className='text-center'>
      <Card.Body>
        <Card.Title>Restaurante Alejandro Barcena Panigua</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Alexbapa</Card.Subtitle>
        <Card.Text>
          Nos especializamos en comida React, contamos con lo mejor para crear platillos de nivel mundial usando los componentes mas apetitosos del mundo.
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
   
 
  );
}

export default Jumbotron;