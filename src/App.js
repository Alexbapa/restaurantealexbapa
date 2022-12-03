import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from  "react-router-dom";
import Container from "./Components/Shared/Container";
import Home from './Components/Pages/Home';
import Nopage from './Components/Pages/Nopage';
import Address from './Components/Pages/Addres';
import Formu   from './Components/Shared/Formu';

function App() {
  return (
       <BrowserRouter >
        <Routes>
          <Route path='/tiendaDiscosDos/' element={ <Container /> }>
            <Route index element={ <Home/>}></Route>
            <Route path='/tiendaDiscosDos/contact' element={ <Formu /> }></Route>
            <Route path='/tiendaDiscosDos/address' element={ <Address /> }></Route>
            <Route path='*' element={ <Nopage /> }></Route>
          </Route>
        </Routes>
       </BrowserRouter>
  );
}

export default App;
