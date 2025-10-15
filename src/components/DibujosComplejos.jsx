import { Component } from "react";
class DibujosComplejos extends Component{

    dibujarNumeros = () => {
        var lista = [];
        for(var i=1; i<=7; i++){
            var numero = parseInt(Math.random() * 100) + 1;
            lista.push(<li key={numero}>{numero}</li>);
        }
        return lista;
    }
    render(){
        return(
            <div>
                <h1>Dibujos dinámicos React</h1>
                <ul>{this.dibujarNumeros()}</ul>
            </div>
        )
    }
}

export default DibujosComplejos