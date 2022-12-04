import Carrusel from '../Shared/Carrusel';
import Jumbotron from '../Shared/Jumbotron';
import Reserva from '../Shared/Reserva';
import Reservaciones from '../Shared/Reservaciones';

const Home = () =>{
    return(
        <>
        <Carrusel/>
        <Jumbotron/>
        <Reserva/>
        <Reservaciones/>
        </>
    );
}

export default Home;