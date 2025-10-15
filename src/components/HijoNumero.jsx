import { Component } from "react";
class HijoNumero extends Component{

    sumarPadre = () => {
        this.props.sumarNum(this.props.numero)
    }
    render(){
        return(
            <div>
                <h1 style={{color:"red"}}>Numero {this.props.numero}</h1>
                <button onClick={this.sumarPadre}>Sumar {this.props.numero}</button>
            </div>
        )
    }
}

export default HijoNumero;