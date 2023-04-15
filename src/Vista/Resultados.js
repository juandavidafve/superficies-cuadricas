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
        if (this.props.figura != null) {
            return (
                <div className="container p-5">
                    <h2 className="fw-bold">Resultados</h2>
                    <p>Figura: {this.props.figura}</p>
                    {this.props.punto !== null && (
                        <p>
                            {this.props.punto.nombre}: (
                            {this.props.punto.pos[0]},{this.props.punto.pos[1]},
                            {this.props.punto.pos[2]})
                        </p>
                    )}
                    {this.props.info !== null && <p>{this.props.info}</p>}
                    <h2 className="fw-bold">Gráfica</h2>
                    <Grafica
                        ecuacion={this.props.grafica}
                        punto={this.props.punto}
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
