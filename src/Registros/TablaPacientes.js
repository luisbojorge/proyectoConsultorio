import React from "react";
import { thisExpression } from "@babel/types";

export default class TablaPacientes extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            texto:"",
            pacientes: []

        }

    }

    componentDidMount(){
        
    }

    muestraLista(){
        var thisGeneral=this;
        fetch('http://localhost/ControlConsultorio/index.php/API/getUsuarios/getPaciente',{
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

    render(){
        return (<div>
             <button
                onClick={this.muestraLista.bind(this)}
            >muestra la lista</button>
            
            <table>

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
                { (this.state.pacientes).map(item => (
                    <tr>
                        
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
            </table>
            
           
        </div>)

    }
}