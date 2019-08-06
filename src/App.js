import React from 'react';
import Login from './Login/login';
import VistaInicio from './Login/VistaPrincipal';


export default class App  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      auth: 0,// state utilizado para el logeo igualado a 0.
    }
  }

  componentWillMount(){// Persistencia de datos para mantener la sesion con localStorage.
    var sesion = localStorage.getItem('sesion');
    if(sesion == null){
      localStorage.setItem('sesion', 0);
    }

    sesion = localStorage.getItem('sesion');
    //console.log(sesion);
    this.setState({
      auth: Number(sesion), //Hay que poner el tipo de dato que tiene el state.
    });
  }


  acceso(_type){// funcion para el inicio de sesion.
    this.setState({
      auth: _type,// cacha el valor 
    });
    localStorage.setItem('sesion', _type);// se pasa el valor cachado a sesion que esta igualado a 0.

  }



  render(){

    if(this.state.auth === 0){// si auth es igual a cero se retorna el login 
      return ( 
        <div>
          <Login acceso={this.acceso.bind(this)} /> 
        </div>
        );
    }else{
      return(
        <VistaInicio acceso={this.acceso.bind(this)} />// si es igual a uno, me retorna a la vista principal, pasando la funcion acceso.
      )
      
    }
    
  }
  
}