import React from 'react';
import { Form, Button} from 'react-bootstrap';


export default class RegistroCita extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nompac:'',
            apellidopac:'',
            fecha:'',
            hora:'',
            motivo:'',

        }
    }

    registrar(){
        if(this.state.nompac !== '' && this.state.apellidopac !==''&& this.state.fecha !==''&& this.state.hora !==''&& this.state.motivo !==''){
            fetch('http://localhost:8080/ControlConsultorio/index.php/API/AgendarCita',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:'nombre='+this.state.nompac + '&apellido='+this.state.apellidopac + '&fecha='+this.state.fecha + '&hora='+this.state.hora + '&motivo='+this.state.motivo
            })
            .then(result => result.json())
            .then(function(data){
                alert('el resultado:' + JSON.stringify(data));
            })
            .catch(function(error){

            });
        }else{
            alert('falta llenar campos');
        }
        
    }
    valorCampoNompac(e){
        console.log(e.target.value);
        this.setState({
            nompac: e.target.value,
        }); 
    }
    valorCampoApellidopac(_valor){
        console.log(_valor.target.value);
        this.setState({
            apellidopac: _valor.target.value,
        });
    }
    valorCampoFecha(_valor){
        console.log(_valor.target.value);
        this.setState({
            fecha: _valor.target.value,
        });
    }
    valorCampoHora(_valor){
        console.log(_valor.target.value);
        this.setState({
            hora: _valor.target.value,
        });
    }
    valorCampoMotivo(_valor){
        console.log(_valor.target.value);
        this.setState({
            motivo: _valor.target.value,
        });
    }
    
    render(){
        return(
            <center>
            <div class="col-sm-3">

                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                    />
                    
                    <div>
                      <font size="6" color="#33B40D" face="Lucida Sans Unicode">
                       Registro Cita</font>
                    </div>

                    <Form>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese nombre"
                            value={this.state.nompac}
                            onChange={this.valorCampoNompac.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese apellido"
                             value={this.state.apellidopac}
                             onChange={this.valorCampoApellidopac.bind(this)} />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese fecha"
                            value={this.state.fecha}
                            onChange={this.valorCampoFecha.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese hora"
                            value={this.state.hora}
                            onChange={this.valorCampoHora.bind(this)} />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Motivo</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese motivo"
                           value={this.state.motivo}
                           onChange={this.valorCampoMotivo.bind(this)} />
                        </Form.Group>
                    </Form>

                    <Button 
                        variant="primary"
                        onClick={this.registrar.bind(this)} >REGISTRAR 
                    </Button>
            </div>
            </center>
        )
    }
}