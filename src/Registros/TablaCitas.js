import React from "react";
import { Table} from 'react-bootstrap';

export default class TablaCitas extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            texto:"",
            cita: [],

        }

    }

    componentDidMount(){
        this.muestracita();
    }

    muestracita(){
        var thisGeneral=this;
        fetch('http://localhost:8080/ControlConsultorio/index.php/API/getUsuarios/getCita',{
            method: 'GET'
        })
        .then(result => result.json())
        .then(function(resultado){
            console.log(resultado);
            thisGeneral.setState({
                texto: JSON.stringify(resultado),
                cita: resultado,
            })
        })
        .catch(function(error){
            console.log(error)
        });   
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


            <h1 ALIGN="center">Citas Agendadas</h1>
            <br></br><br></br>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
               
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Motivo</th>
                </tr>
            </thead>
            <tbody>
                { (this.state.cita).map(
                    
                    item => (
                    <tr onClick={() => {this.handClick(item)}}>
                        
                        <td>{item.id} </td>
                        <td>{item.nombre} </td>
                        <td>{item.apellido} </td>
                        <td>{item.fecha}</td>
                        <td>{item.hora}</td>
                        <td>{item.motivo}</td>
                    
                    </tr>
                )) }
                </tbody>
            </Table>
        </div>
        )
    }
}