import { Component } from "react";
class Comic extends Component{
    render(){
        return(
            <div>
                <h2 style={{color:"blue"}}>{this.props.comic.titulo}</h2>
                <p>{this.props.comic.descripcion}</p><br/>
                <img src={this.props.comic.imagen} style={{width: "250px", height: "250px"}}/><br/>
                <button onClick={ () => {
                    this.props.seleccionarFavorito(this.props.comic);
                }}>
                    Seleccionar favorito
                </button>
                <button onClick={ () => {
                    this.props.deleteComic(this.props.index);
                }}>
                    Eliminar comic
                </button>
            </div>
        )
    }
}

export default Comic