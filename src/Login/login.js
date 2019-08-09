import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            usuario:'',
            pass:'',
            ingresar: false,
            sesion: 0,
            redirect:'Login',  
        }

        console.log(this.props);
    }

    registrar(){
        var that = this;// Obligatorio
        if(this.state.usuario !== '' && this.state.pass !==''){
            fetch('http://localhost:8080/ControlConsultorio/index.php/API/Login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:'email='+this.state.usuario + '&password='+this.state.pass
            })
            .then(result => result.json())
            .then(function(data){
            
                if(data.ACCESO==='true'){
                    that.props.acceso(1);
                }else{
                    //??
                }

                alert(data.Mensaje)
               /*if(data.ACCESO!==null){
                    alert(data.ACCESO)
                }else{

                    that.props.acceso(1); //acceso al login
                }
               
                 setTimeout(function(){
                    alert('El resultado: ' + JSON.stringify(data));
                }, 100)*/
 
            })

            .catch(function(error){

            });
        }else{
            alert('Falta usuario o contraseña');
        }
        
    }

    valorCampoUsuario(e){
        console.log(e.target.value);
        this.setState({
            usuario: e.target.value,
        }); 
    }
    valorCampoPass(_valor){
        console.log(_valor.target.value);
        this.setState({
            pass: _valor.target.value,
        });
    }

    render(){
            return(

                <center>
                <br></br><br></br>
                <div class="col-sm-3">
                   <div><h1>INICIAR SESION</h1></div>
                    <br></br><br></br>
                    <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                    />
                    <Form>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese email"
                            value={this.state.usuario}
                            onChange={this.valorCampoUsuario.bind(this)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese password"
                            value={this.state.pass}
                            onChange={this.valorCampoPass.bind(this)} />
                        </Form.Group>
                    </Form>
                    <br></br>
                    <Button 
                        variant="primary"
                        onClick={this.registrar.bind(this)} >INGRESAR
                    </Button>
                   
                </div>
                </center>
            ) 
    }
}