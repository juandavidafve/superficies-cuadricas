import React from "react";
import Grafica from "./Grafica";

class Resultados extends React.Component {
    constructor(props) {
        super(props);
        this.graficaElem = React.createRef();
    }

    actualizar() {
        this.graficaElem.current.actualizar();
    }

    render() {
        if (this.props.resultado != null) {
            return (
                <div className="container p-5">
                    <h2 className="fw-bold">Resultados</h2>
                    <p>{this.props.resultado}</p>
                    <h2 className="fw-bold">Gráfica</h2>
                    <Grafica
                        ecuacion={this.props.grafica}
                        ref={this.graficaElem}
                    />
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Resultados;
