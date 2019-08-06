import React from 'react';
import { Button, Form} from 'react-bootstrap';

export default class RegistroAdmi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:'',
            apellido:'',
            telefono: '',
            direccion:'',
            sucursal:'',
            email:'',
            password:'',
            repetirpassword: '',

        }
    }
    registrarAdmi(){
        if(this.state.email !=='' && this.state.nombre !=='' && this.state.password !=='' && this.state.apellido !=='' && this.state.repetirpassword !==''){

            if (this.state.password == this.state.repetirpassword){  
            }else{
                alert('Las contraseñas deben de ser iguales');
            }

            fetch('http://localhost:8080/ControlConsultorio/index.php/API/RegistroPaciente',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:'nombre='+this.state.nombre + '&apellido='+this.state.apellido + 'telefono='+this.state.telefono + '&direccion='+this.state.direccion
                + 'sucursal='+this.state.sucursal + '&email='+this.state.email + '&password='+this.state.password + '&repetirpassword='+this.state.repetirpassword
            })

            .then(result => result.json())
            .then(function(data){
                alert('el resultado:' + JSON.stringify(data));
            })
            .catch(function(error){

            });
        }else{
           alert('Falta llenar algun campo');
        }
        
    }
    valorCampoNombre(e){
        console.log(e.target.value);
        this.setState({
            nombre: e.target.value,
        });
    }
    valorCampoApellido(_valor){
        console.log(_valor.target.value);
        this.setState({
            apellido: _valor.target.value,
        });
    }
    valorCampoTelefono(_valor){
        console.log(_valor.target.value);
        this.setState({
            telefono: _valor.target.value,
        });
    }
    valorCampoDireccion(_valor){
        console.log(_valor.target.value);
        this.setState({
            direccion: _valor.target.value,
        });
    }
    valorCampoSucursal(_valor){
        console.log(_valor.target.value);
        this.setState({
            sucursal: _valor.target.value,
        });
    }
    valorCampoEmail(_valor){
        console.log(_valor.target.value);
        this.setState({
            email: _valor.target.value,
        });
    }
    valorCampoPassword(_valor){
        console.log(_valor.target.value);
        this.setState({
            password: _valor.target.value,
        });
    }
    valorCamporepPassword(_valor){
        console.log(_valor.target.value);
        this.setState({
            repetirpassword: _valor.target.value,
        });
    }

    render(){
        return(

            <center>
                <div>
                <font size="6" color="#33B40D" face="Lucida Sans Unicode">
                  Registro Administrador</font>
                </div>
            <div class="col-sm-3">

                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                    />

                <br></br>

                <Form>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese nombre"
                            value={this.state.nombre}
                            onChange={this.valorCampoNombre.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese apellido"
                             value={this.state.apellido}
                             onChange={this.valorCampoApellido.bind(this)} />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese telefono"
                            value={this.state.telefono}
                            onChange={this.valorCampoTelefono.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese direccion"
                            value={this.state.direccion}
                            onChange={this.valorCampoDireccion.bind(this)} />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Sucursal</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese sucursal"
                            value={this.state.sucursal} 
                            onChange={this.valorCampoSucursal.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control size="sm" type="text" placeholder="Ingrese email"
                            value={this.state.email}
                            onChange={this.valorCampoEmail.bind(this)} />
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control size="sm" type="password" placeholder="Ingrese password"
                            value={this.state.password}
                            onChange={this.valorCampoPassword.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirmar password</Form.Label>
                            <Form.Control size="sm" type="password" placeholder="Repetir password"
                            value={this.state.repetirpassword}
                            onChange={this.valorCamporepPassword.bind(this)} />
                        </Form.Group>
                    </Form>
                    
                    <Button 
                        variant="primary"
                        onClick={this.registrarAdmi.bind(this)} >REGISTRAR 
                    </Button>
            </div>
            </center>
        )
    }
}