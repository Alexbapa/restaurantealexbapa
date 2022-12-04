import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { db } from '../../config/firebase';

const Reservaciones = () =>{
    const[newReservas, setNewReservas] = useState([]);
    
     useEffect(()=>{
      const q = query(collection(db, 'reservas'));
  
      onSnapshot(q,(querySnapshot)=>{
         setNewReservas(
          querySnapshot.docs.map((item)=>({
              id: item.id,
              data: item.data(),
          }))
         );
      });
  
     }, []);
     return(
      <Container>
      <Row>
      {newReservas.map((items)=> (
  <Col>
  <Card style={{ width: '18rem' }} className='text-center'>
<Card.Body>
  <Card.Title>Reserva registrada</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">¡Funciono!</Card.Subtitle>
  <Card.Text>
   Nombre: {items.data.nombre}---Horario: {items.data.horario}---Personas{items.data.personas}
  </Card.Text>
</Card.Body>
</Card>
  </Col>
                 ))}
      
      </Row>
    </Container>
       )
      
    
     };
    

export default Reservaciones