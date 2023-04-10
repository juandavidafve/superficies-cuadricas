import React from "react";
import Input from "./Input";
import Resultados from "./Resultados";
import determinarCuadrica from "../Modelo/determinarCuadrica";
import ecuacionGeneral from "../Modelo/ecuacionGeneral";

class GUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ecuacionReducida: [],
            ecuacionGeneral: [],
            resultado: null,
            grafica: null,
        };

        this.analizarEcuacionGeneral = this.analizarEcuacionGeneral.bind(this);
        this.analizarEcuacion = this.analizarEcuacion.bind(this);
        this.agregarValor = this.agregarValor.bind(this);
        this.resultadoElem = React.createRef();
    }

    agregarValor(state) {
        if (state.tipoEcuacion === "general") {
            this.setState({
                ...this.state,
                ecuacionGeneral: {
                    ...this.state.ecuacionGeneral,
                    [state.name]: state.valor,
                },
            });
        } else if (state.tipoEcuacion === "reducida") {
            this.setState({
                ...this.state,
                ecuacionReducida: {
                    ...this.state.ecuacionReducida,
                    [state.name]: state.valor,
                },
            });
        }
    }

    async analizarEcuacionGeneral() {
        const eq = this.state.ecuacionGeneral;

        if (Object.keys(eq).length === 7) {
            const resultado = ecuacionGeneral(
                eq.A,
                eq.B,
                eq.C,
                eq.D,
                eq.E,
                eq.F,
                eq.G
            );

            await this.setState({
                ...this.state,
                resultado,
                grafica: `${eq.A}x^2+${eq.B}y^2+${eq.C}z^2+${eq.D}x+${eq.E}y+${eq.F}z+${eq.G}=0`,
            });
            this.resultadoElem.current.actualizar();
        } else {
            alert("Hay campos sin rellenar");
        }
    }

    async analizarEcuacion() {
        const eq = this.state.ecuacionReducida;

        if (Object.keys(eq).length === 7) {
            const resultado = determinarCuadrica(
                eq.xden,
                eq.yden,
                eq.zden,
                eq.igualdad,
                eq.xexp,
                eq.yexp,
                eq.zexp
            );

            await this.setState({
                ...this.state,
                resultado,
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
                                tipoEcuacion="reducida"
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
                                tipoEcuacion="reducida"
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
                                tipoEcuacion="reducida"
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
                                min="0"
                                max="1"
                                name="igualdad"
                                tipoEcuacion="reducida"
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
                                tipoEcuacion="reducida"
                            />
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <Input
                                className="w-75 text-center"
                                placeholder="1"
                                agregarValor={this.agregarValor}
                                name="yden"
                                tipoEcuacion="reducida"
                            />
                        </div>
                        <div className="col"></div>
                        <div className="col">
                            <Input
                                className="w-75 text-center"
                                placeholder="1"
                                agregarValor={this.agregarValor}
                                name="zden"
                                tipoEcuacion="reducida"
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

                <h2 className="fw-bold text-center my-5">Ecuacion General</h2>
                <div className="container d-flex gap-3 justify-content-center my-5 text-center">
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="A"
                        tipoEcuacion="general"
                    />
                    <span className="fw-bold h1">x²</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="B"
                        tipoEcuacion="general"
                    />
                    <span className="fw-bold h1">y²</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="C"
                        tipoEcuacion="general"
                    />
                    <span className="fw-bold h1">z²</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="D"
                        tipoEcuacion="general"
                    />
                    <span className="fw-bold h1">x</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="E"
                        tipoEcuacion="general"
                    />
                    <span className="fw-bold h1">y</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="F"
                        tipoEcuacion="general"
                    />
                    <span className="fw-bold h1">z</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="G"
                        tipoEcuacion="general"
                    />
                    <span className="fw-bold h1">=</span>
                    <span className="fw-bold h1">0</span>
                </div>
                <div className="container my-5 text-center">
                    <button
                        className="btn btn-lg btn-primary"
                        onClick={this.analizarEcuacionGeneral}
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
