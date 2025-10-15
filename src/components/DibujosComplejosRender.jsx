import { Component } from "react";
class DibujosComplejosRender extends Component{
    state = {
        nombres: ["Lucia", "Diana", "Antonia", "Adrian", "Pablo", "Faker"]
    }
    
    generarNombre = () => {
        this.state.nombres.push("NUEVO NOMBRE")

        this.setState({
            nombres: this.state.nombres
        })
    }
    
    render(){
        return(
            <div>
                <h1>Dibujos Complejos Render</h1>
                <button onClick={this.generarNombre}>
                    Nuevo nombre
                </button>
                {
                    this.state.nombres.map((nombre, index) => {
                        return(<h3 key={index} style={{color: "blue"}}>
                            {nombre}
                        </h3>)
                    })
                }
            </div>
        )
    }
}

export default DibujosComplejosRender