import React from "react";
import Input from "./Input";
import Resultados from "./Resultados";
import ecuacionGeneral from "../Modelo/ecuacionGeneral";

class GUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ecuacion: [],
            figura: null,
            centro: null,
            info: null,
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
        let eq = this.state.ecuacion;

        if (Object.keys(eq).length === 7) {
            let valido = true;

            for (const [key, value] of Object.entries(eq)) {
                let isNumber = /^[\+\-]?\d+(\.\d+)?$/g;
                if (valido) {
                    valido = isNumber.test(value);
                }
            }

            if (valido) {
                for (const [key, value] of Object.entries(eq)) {
                    eq[key] = parseFloat(value);
                }

                await this.setState({
                    ...this.state,
                    ecuacion: eq,
                });

                eq = this.state.ecuacion;

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
                    figura: resultado.figura,
                    punto: resultado.punto,
                    info: resultado.info,
                    grafica: `${eq.A}x^2+${eq.B}y^2+${eq.C}z^2+${eq.D}x+${eq.E}y+${eq.F}z+${eq.G}=0`,
                });
                this.resultadoElem.current.actualizar();
            } else {
                alert("Hay entradas inválidas");
            }
        } else {
            alert("Hay campos sin rellenar.");
        }
    }

    render() {
        return (
            <div className="py-1">
                <h2 className="fw-bold text-center my-5">
                    Superficie Cuádrica
                </h2>
                <div className="container d-flex gap-3 justify-content-center my-5 text-center">
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="A"
                    />
                    <span className="fw-bold h1">x²</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="B"
                    />
                    <span className="fw-bold h1">y²</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="C"
                    />
                    <span className="fw-bold h1">z²</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="D"
                    />
                    <span className="fw-bold h1">x</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="E"
                    />
                    <span className="fw-bold h1">y</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="F"
                    />
                    <span className="fw-bold h1">z</span>
                    <span className="fw-bold h1">+</span>
                    <Input
                        className="w-50 text-center"
                        placeholder="1"
                        agregarValor={this.agregarValor}
                        name="G"
                    />
                    <span className="fw-bold h1">=</span>
                    <span className="fw-bold h1">0</span>
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
                    figura={this.state.figura}
                    punto={this.state.punto}
                    info={this.state.info}
                    grafica={this.state.grafica}
                    ref={this.resultadoElem}
                />
            </div>
        );
    }
}

export default GUI;
