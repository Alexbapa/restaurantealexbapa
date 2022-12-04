import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { async } from '@firebase/util';

const Reserva = () =>{

   const[inputs, setInputs] = useState({})

   const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
     setInputs(values =>({...values,[name]: value}))
   }

   const handleSubmit = async(event) =>{
    event.preventDefault();
     try {
      const coment = collection(db,"reservas");
      const res = await addDoc(coment, inputs);
      
      return res
     } catch (error) {
      console.log("hubo un error", error);
      
     }
   }

  return(
<Form onSubmit={handleSubmit}>
<Form.Label>Reserva tu Asistencia</Form.Label>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control onChange={handleChange} name="nombre" type="text" placeholder="Nombre Completo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Horario</Form.Label>
        <Form.Control onChange={handleChange} name="horario" type="number" placeholder="de las 13 a las 20" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Asistentes</Form.Label>
        <Form.Control onChange={handleChange} name="personas" type="number" placeholder="cuentas personas son" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Reserva;