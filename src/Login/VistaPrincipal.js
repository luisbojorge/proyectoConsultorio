import React from 'react';
import { ButtonGroup, Button, Dropdown } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import Paciente from '../Registros/RegistroPaciente';// .. para regresar a src
import Login from './login';
import Admistrador from '../Registros/RegistroAdmi';
import Cita from '../Registros/RegistroCita';
import Inicio from '../Login/Inicio';
import TablaPacientes from '../Registros/TablaPacientes';
import TablaCitas from '../Registros/TablaCitas';

export default class VistaPrincipal extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
}

  render(){      
    return ( 
      <Router>
 
        <font size="7" color="#FD7F08" face="Lucida Sans Unicode">
         <p ALIGN="center"><b>Bienvenido a sucursal Garcia</b> </p> 
        </font>

        <div ALIGN="right">
          <Button variant="outline-danger"
            onClick={ ()=> this.props.acceso(0) }//Cerrar sesion
            >Salir</Button>
        </div>
       
        <div>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
            />   

            <Dropdown as={ButtonGroup}>
              <Button variant="success" href="/Inicio">Pagina Inicio</Button>

              <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

              <Dropdown.Menu>
                <Dropdown.Item href="/RegPaciente"><font color="#33B40D" face="Lucida Sans Unicode">
                  Registro Paciente</font></Dropdown.Item>

                  <Dropdown.Item href="/Tabla"><font color="#33B40D" face="Lucida Sans Unicode">
                  Pacinetes Registrados</font></Dropdown.Item>

                  <Dropdown.Item href="/RegCita"><font color="#33B40D" face="Lucida Sans Unicode">
                  Registro Cita</font></Dropdown.Item>

                  <Dropdown.Item href="/Tabla2"><font color="#33B40D" face="Lucida Sans Unicode">
                  Citas Agendadas</font></Dropdown.Item>

                  <Dropdown.Item href="/RegAdministrador"><font color="#33B40D" face="Lucida Sans Unicode">
                  Registro Administrador</font></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              
            </div> 
        
          <Route path='/RegPaciente' component={Paciente} />
          <Route path='/RegAdministrador' component={Admistrador} />
          <Route path='/RegCita' component={Cita} />
          <Route path='/Login' component={Login} />
          <Route path='/Inicio' component={Inicio} />
          <Route path='/Tabla' component={TablaPacientes} />
          <Route path='/Tabla2' component={TablaCitas} />
      </Router>
      
      );

   
  }
  
}
