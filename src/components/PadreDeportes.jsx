import { Component } from "react"
import HijoDeporte from "./HijoDeporte";
class PadreDeportes extends Component{
    deportes = ["Voley", "Futbol", "Basket", "Badminton"];
    state = {
        favorito: ""
    }
    mostrarFavorito = (deporte) => {
        this.setState({favorito: deporte})
    }
    render(){
        return(
            <div>
                <h1>Padre deportes</h1>
                <h2 style={{color:"green"}}>
                    Su deporte favorito es: {this.state.favorito}
                </h2>
                {
                    this.deportes.map((deporte,index) => {
                        return(<HijoDeporte key={index} nombre={deporte} metodoPadre={this.mostrarFavorito}/>)
                    })
                }
            </div>
        )
    }
}

export default PadreDeportes