import { Component } from "react";

function metodoAbsurdo(){
    console.log("metodo sin funcionalidad")
}

class Contador extends Component{
    state={
        valor: parseInt(this.props.inicio)
    }
    numero = 1

    incrementarNumero = () => {
        this.numero += 1;
        console.log("valor del numero: "+this.numero)
    }

    incrementarValor = () => {
        this.setState({
            valor: this.state.valor+1
        })
    }

    render(){
        return(
            <div>
                <h1 style={{color: "blue"}}>
                    Ejemplo Contador JSX: {this.props.inicio}
                </h1>
                <h3 style={{color:"red"}}>
                    Valor: {this.state.valor}
                </h3>
                <h1 style={{color: "blue"}}>
                    Ejemplo Contador JSX: {this.numero}
                </h1>

                <button onClick={this.incrementarValor}>Incrementar valor</button>

                <button onClick={this.incrementarNumero}>
                    Incrementar número
                </button>
                {/* TENEMOS MULTIPLES FORMAS DE REALIZAR LLAMADAS */}
                <button onClick={() => {
                    metodoAbsurdo();
                    this.incrementarNumero();
                }}>
                    clicka
                </button>
                {/* <button onClick={() => 
                    this.incrementarNumero()
                }>
                    clicka
                </button> */}
            </div>
        )
    }
}

export default Contador