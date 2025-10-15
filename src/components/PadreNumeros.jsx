import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component{
    state = {
        total: 0,
        numeros : [1,2,3,5,8,13]
    }

    sumarNum = (num) => {
        this.setState({total: this.state.total+num})
    }

    generarNum = () => {
        this.state.numeros.push(this.state.numeros[this.state.numeros.length-1] + this.state.numeros[this.state.numeros.length-2])
        // this.state.numeros.push(parseInt(Math.random() * 100)+1)
        this.setState({numeros:this.state.numeros})
    }
    
    resetearContador = () => {
        this.setState({total: 0})
    }

    render(){
        return(
            <div>
                <h1>Padre Numeros</h1>
                <h1 style={{backgroundColor:"yellow"}}>La suma es: {this.state.total}</h1>           
                <button onClick={this.generarNum}>Generar Numero</button>
                <button onClick={this.resetearContador}>Resetear Suma</button>
                {
                    this.state.numeros.map((num, index) =>{
                        return <HijoNumero numero={num} key={index} sumarNum={this.sumarNum}/>
                    })
                }
            </div>
        )
    }
}

export default PadreNumeros