import {Link, Outlet} from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const Container = () =>{
    return(
        <div>
         <Header/>
         <Outlet/>
          <Footer/>
        </div>
    ) 
}

export default Container;