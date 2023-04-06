import React from "react";
import Input from "./Input";
import Resultados from "./Resultados";

class GUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ecuacion: [],
            resultado: null,
            grafica: null,
        };

        this.analizarEcuacion = this.analizarEcuacion.bind(this);
        this.agregarValor = this.agregarValor.bind(this);
        this.resultadoElem = React.createRef();
    }

    agregarValor(state) {
        this.setState({
            ...this.state,
            ecuacion: {
                ...this.state.ecuacion,
                [state.name]: state.valor,
            },
        });
    }

    async analizarEcuacion() {
        const eq = this.state.ecuacion;

        if (Object.keys(eq).length === 7) {
            await this.setState({
                ...this.state,
                resultado: "testResultado",
                grafica: `((x^(${eq.xexp}))/(${eq.xden}))+((y^(${eq.yexp}))/(${eq.yden}))+((z^(${eq.zexp}))/(${eq.zden}))=${eq.igualdad}`,
            });
            this.resultadoElem.current.actualizar();
        } else {
            alert("Hay campos sin rellenar");
        }
    }

    render() {
        return (
            <div className="py-1">
                <h2 className="fw-bold text-center my-5">
                    Superficie Cuadrica
                </h2>
                <div className="container my-5 w-50 text-center">
                    <div className="row">
                        <div className="col position-relative">
                            <Input
                                className="w-50 position-relative start-50 text-center"
                                placeholder="2"
                                agregarValor={this.agregarValor}
                                name="xexp"
                            />
                            <p className="fw-bold h1">x</p>
                        </div>
                        <div className="col"></div>
                        <div className="col position-relative">
                            <Input
                                className="w-50 position-relative start-50 text-center"
                                placeholder="2"
                                agregarValor={this.agregarValor}
                                name="yexp"
                            />
                            <p className="fw-bold h1">y</p>
                        </div>
                        <div className="col"></div>
                        <div className="col position-relative">
                            <Input
                                className="w-50 position-relative start-50 text-center"
                                placeholder="2"
                                agregarValor={this.agregarValor}
                                name="zexp"
                            />
                            <p className="fw-bold h1">z</p>
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col fw-bold h1">----</div>
                        <div className="col fw-bold h1">+</div>
                        <div className="col fw-bold h1">----</div>
                        <div className="col fw-bold h1">+</div>
                        <div className="col fw-bold h1">----</div>
                        <div className="col fw-bold h1">=</div>
                        <div className="col">
                            <Input
                                className="w-50 text-center"
                                placeholder="1"
                                agregarValor={this.agregarValor}
                                name="igualdad"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Input
                                className="w-75 text-center"
                                placeholder="1"
                                agregarValor={this.agregarValor}
                                name="xden"
                            />
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <Input
                                className="w-75 text-center"
                                placeholder="1"
                                agregarValor={this.agregarValor}
                                name="yden"
                            />
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <Input
                                className="w-75 text-center"
                                placeholder="1"
                                agregarValor={this.agregarValor}
                                name="zden"
                            />
                        </div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="container my-5 text-center">
                    <button
                        className="btn btn-lg btn-primary"
                        onClick={this.analizarEcuacion}
                    >
                        Analizar
                    </button>
                </div>

                <Resultados
                    resultado={this.state.resultado}
                    grafica={this.state.grafica}
                    ref={this.resultadoElem}
                />
            </div>
        );
    }
}

export default GUI;
