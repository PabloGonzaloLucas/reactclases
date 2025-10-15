import { Component } from "react"
class HijoDeporte extends Component{
    state = {
        favorito: ""
    }
    mostrarFavorito = () => {
        this.setState({
            favorito: this.props.nombre
        })

        alert("Tu deporte favorito es: "+this.state.favorito)
    }
    
    seleccionarFavorito = () => {
        var deporte = this.props.nombre;
        this.props.metodoPadre(deporte)
    }

    render(){
        return(
            <div>
                <h2 style={{color:"blue"}}>{this.props.nombre}</h2>
                
                {/* <button onClick={this.mostrarFavorito}>Favorito</button> */}
                {/* <button onClick={() => this.props.metodoPadre(this.props.nombre)}>Favorito</button> */}
                <button onClick={this.seleccionarFavorito}>Favorito</button>
            </div>
        )
    }
}

export default HijoDeporte