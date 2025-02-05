import React from "react";
import { Table} from 'react-bootstrap';

export default class Tablapacientes extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            texto:"",
            pacientes: [],

        }

    }

    componentDidMount(){
        this.muestraLista();
        
    }

    muestraLista(){
        var thisGeneral=this;
        fetch('http://localhost:8080/ControlConsultorio/index.php/API/getUsuarios/getPaciente',{
            method: 'GET'
        })
        .then(result => result.json())
        .then(function(resultado){
            console.log(resultado);
            thisGeneral.setState({
                texto: JSON.stringify(resultado),
                pacientes: resultado,
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }

    handClick(e) {
        alert(e.nombre + ' ' + e.apellido);
        console.log(e);
    }
    
    render(){
        return (
        <div>

            <link
               rel="stylesheet"
               href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
               integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
               crossorigin="anonymous"
               />

            <h1 ALIGN="center">Pacientes Registrados</h1>
            <br></br><br></br>

            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                { (this.state.pacientes).map(
                    
                    item => (
                    <tr onClick={() => {this.handClick(item)}}>
                        
                        <td>{item.idpaciente} </td>
                        <td>{item.nombre} </td>
                        <td>{item.apellido} </td>
                        <td>{item.edad}</td>
                        <td>{item.telefono}</td>
                        <td>{item.direccion}</td>
                        <td>{item.email}</td>
                    
                    </tr>
                )) }
                </tbody>
            </Table>
          
        </div>
        )
    }
}