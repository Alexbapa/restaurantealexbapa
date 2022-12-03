import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from  "react-router-dom";
import Container from "./Components/Container";
import Home from './Components/Home';
import Nopage from './Components/Nopage';
import Formu   from './Components/Formu';

function App() {
  return (
       <BrowserRouter  basename='/tiendaDiscosDos'>
        <Routes>
          <Route path='/tiendaDiscosDos/' element={ <Container /> }>
            <Route index element={ <Home/>}></Route>
            <Route path='/contact' element={ <Formu /> }></Route>
            <Route path='*' element={ <Nopage /> }></Route>
          </Route>
        </Routes>
       </BrowserRouter>
  );
}

export default App;
