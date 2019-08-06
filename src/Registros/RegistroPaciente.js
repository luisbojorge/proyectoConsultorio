import React from 'react';
import { Button, Form } from 'react-bootstrap';


export default class RegistroPaciente extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nompac:'',
            apellidopac:'',
            edad:'',
            telpac:'',
            dirpac:'',
            emailpac:'',

        }
    }

    registro(){
        if(this.state.nompac !== '' && this.state.apellidopac !==''&& this.state.edad !==''&& this.state.telpac !==''&& this.state.dirpac !==''&& this.state.emailpac !==''){
            fetch('http://localhost:8080/ControlConsultorio/index.php/API/RegistroPaciente',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:'nombre='+this.state.nompac + '&apellido='+this.state.apellidopac + '&edad='+this.state.edad + '&telefono='+this.state.telpac + '&direccion='+this.state.dirpac + '&email='+this.state.emailpac
            })
            .then(result => result.json())
            .then(function(data){
                alert('el resultado: ' + JSON.stringify(data));
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
    valorCampoEdad(_valor){
        console.log(_valor.target.value);
        this.setState({
            edad: _valor.target.value,
        });
    }
    valorCampoTelpac(_valor){
        console.log(_valor.target.value);
        this.setState({
            telpac: _valor.target.value,
        });
    }
    valorCampoDirpac(_valor){
        console.log(_valor.target.value);
        this.setState({
            dirpac: _valor.target.value,
        });
    }
    valorCampoEmailpac(_valor){
        console.log(_valor.target.value);
        this.setState({
            emailpac: _valor.target.value,
        });
    }
    
    render(){
        return(

            <center>
                <div>
                  <font size="6" color="#33B40D" face="Lucida Sans Unicode">
                  Registro Paciente</font>
                </div>   
                 <br></br>
            <div class="col-sm-3">
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                    />
                        
                    <Form>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese nombre"
                             value={this.state.nompac}
                             onChange={this.valorCampoNompac.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese apellido"
                             value={this.state.apellidopac}
                             onChange={this.valorCampoApellidopac.bind(this)} />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Edad</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese sucursal"
                            value={this.state.edad}
                            onChange={this.valorCampoEdad.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese telefono"
                            value={this.state.telpac}
                            onChange={this.valorCampoTelpac.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese direccion"
                            value={this.state.dirpac}
                            onChange={this.valorCampoDirpac.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese email"
                            value={this.state.emailpac}
                            onChange={this.valorCampoEmailpac.bind(this)} />
                        </Form.Group>
                    </Form>
                <br></br>
                
                <Button 
                     variant="primary"
                     onClick={this.registro.bind(this)} >REGISTRAR 
                </Button>
            </div>
            </center>
        )
    }
}