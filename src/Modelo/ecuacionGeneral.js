function cuadricaConCentro(A, B, C, D, E, F, G) {
    let M = -G;

    if (A !== 0) {
        M += (D * D) / (4 * A);
    }

    if (B !== 0) {
        M += (E * E) / (4 * B);
    }

    if (C !== 0) {
        M += (F * F) / (4 * C);
    }

    let a2 = M / A;
    let b2 = M / B;
    let c2 = M / C;
    let h = -D / (2 * A);
    let k = -E / (2 * B);
    let l = -F / (2 * C);

    return [
        isFinite(a2) ? a2 : null,
        isFinite(b2) ? b2 : null,
        isFinite(c2) ? c2 : null,
        isFinite(h) ? h : 0,
        isFinite(k) ? k : 0,
        isFinite(l) ? l : 0,
        isFinite(M) ? M : null,
    ];
}

function cuadricaSinCentro(A, B, C, D, E, F, G) {
    let a2 = 1 / A;
    let b2 = 1 / B;
    let c2 = 1 / C;
    let h = -D / (2 * A);
    let k = -E / (2 * B);
    let l = -F / (2 * C);

    let cuadratico1, cuadratico2;
    if (A === 0) {
        if (B !== 0 && C !== 0) {
            a2 = 1 / D;
            h = -G / D + (E * E) / (4 * B * D) + (F * F) / (4 * C * D);
            cuadratico1 = b2;
            cuadratico2 = c2;
        } else {
            h = null;
            k = null;
            l = null;

            if (B === 0) {
                cuadratico1 = -1 / C;
                cuadratico2 = null;
            }

            if (C === 0) {
                cuadratico1 = -1 / B;
                cuadratico2 = null;
            }
        }
    } else if (B === 0) {
        if (A !== 0 && C !== 0) {
            b2 = 1 / E;
            k = -G / E + (D * D) / (4 * A * E) + (F * F) / (4 * C * E);

            cuadratico1 = a2;
            cuadratico2 = c2;
        } else {
            h = null;
            k = null;
            l = null;

            if (A === 0) {
                cuadratico1 = -1 / C;
                cuadratico2 = null;
            }

            if (C === 0) {
                cuadratico1 = -1 / A;
                cuadratico2 = null;
            }
        }
    } else if (C === 0) {
        if (A !== 0 && B !== 0) {
            c2 = 1 / F;
            l = -G / F + (D * D) / (4 * A * F) + (E * E) / (4 * B * F);
            cuadratico1 = a2;
            cuadratico2 = b2;
        } else {
            h = null;
            k = null;
            l = null;

            if (A === 0) {
                cuadratico2 = null;
            }

            if (B === 0) {
                cuadratico1 = -1 / C;
                cuadratico2 = null;
            }
        }
    }

    return [
        isFinite(cuadratico1) ? cuadratico1 : null,
        isFinite(cuadratico2) ? cuadratico2 : null,
        isFinite(h) ? h : 0,
        isFinite(k) ? k : 0,
        isFinite(l) ? l : 0,
    ];
}

function ecuacionGeneral(A, B, C, D, E, F, G) {
    let figura = "Desconocida";
    let punto = null;
    let info = null;

    const cantidadCuadraticos = [A, B, C].filter((e) => e !== 0).length;
    // Existe al menos un valor distinto a 0
    if (
        A !== 0 ||
        B !== 0 ||
        C !== 0 ||
        D !== 0 ||
        E !== 0 ||
        F !== 0 ||
        G !== 0
    ) {
        let cuadraticos = [];
        let lineales = [];
        if (A !== 0) {
            cuadraticos.push("x");
        }
        if (B !== 0) {
            cuadraticos.push("y");
        }
        if (C !== 0) {
            cuadraticos.push("z");
        }
        if (D !== 0) {
            lineales.push("x");
        }
        if (E !== 0) {
            lineales.push("y");
        }
        if (F !== 0) {
            lineales.push("z");
        }

        let linealesSinCuadratico = lineales.filter(
            (e) => !cuadraticos.includes(e)
        );

        if (
            cuadraticos.length < 3 &&
            cuadraticos.length > 0 &&
            linealesSinCuadratico.length > 0
        ) {
            let [a2, b2, h, k, l] = cuadricaSinCentro(A, B, C, D, E, F, G);
            if (cantidadCuadraticos === 2) {
                if ((a2 >= 0 && b2 >= 0) || (a2 < 0 && b2 < 0)) {
                    figura = "Paraboloide Elíptico";
                    let eje = null;

                    if (A === 0) {
                        eje = "X";
                    }

                    if (B === 0) {
                        eje = "Y";
                    }

                    if (C === 0) {
                        eje = "Z";
                    }

                    info = `Se localiza en el eje ${eje}`;
                    punto = {
                        nombre: "Vértice",
                        letra: "V",
                        pos: [h, k, l],
                    };
                }

                if ((a2 >= 0 && b2 < 0) || (a2 < 0 && b2 >= 0)) {
                    figura = "Paraboloide Hiperbólico";
                    let eje = null;

                    if (A === 0) {
                        eje = "X";
                    }

                    if (B === 0) {
                        eje = "Y";
                    }

                    if (C === 0) {
                        eje = "Z";
                    }

                    punto = {
                        nombre: "Vértice",
                        letra: "V",
                        pos: [h, k, l],
                    };
                    info = `La parte superior de la silla se localiza en el eje ${eje}`;
                }
            } else if (cantidadCuadraticos === 1) {
                if (
                    (a2 === null && b2 !== null) ||
                    (a2 !== null && b2 === null)
                ) {
                    figura = "Cilindro Parabólico";
                    let ejes = [];

                    if (A === 0 && D !== 0) {
                        ejes.push("X");
                    }

                    if (B === 0 && E !== 0) {
                        ejes.push("Y");
                    }

                    if (C === 0 && F !== 0) {
                        ejes.push("Z");
                    }

                    if (ejes.length === 1) {
                        info = `Se localiza en el eje ${ejes[0]}`;
                    } else {
                        info = `Se localiza sobre los ejes ${ejes[0]} y ${ejes[1]}`;
                    }
                }
            }
        } else if (cuadraticos.length > 0) {
            let [a2, b2, c2, h, k, l, M] = cuadricaConCentro(
                A,
                B,
                C,
                D,
                E,
                F,
                G
            );

            let nulos = [a2, b2, c2].filter((e) => e === null);
            let negativos = [a2, b2, c2].filter(
                (e) => e !== null && e < 0
            ).length;

            if (lineales.length === 0 && G === 0) {
                negativos = [A, B, C].filter((e) => e !== null && e < 0).length;
            }

            if (nulos.length === 0) {
                if (M !== 0) {
                    if (a2 > 0 && b2 > 0 && c2 > 0) {
                        if (a2 === b2 && a2 === c2) {
                            figura = "Esfera";
                            info = `Su radio es ${Math.sqrt(a2).toFixed(2)}`;
                        } else {
                            let ejeX = (2 * Math.sqrt(a2)).toFixed(2);
                            let ejeY = (2 * Math.sqrt(b2)).toFixed(2);
                            let ejeZ = (2 * Math.sqrt(c2)).toFixed(2);

                            figura = "Elipsoide";
                            info = `Tiene un diámetro de ${ejeX} en el eje X, ${ejeY} en el eje Y, y ${ejeZ} en el eje Z`;
                        }
                        punto = {
                            nombre: "Centro",
                            letra: "C",
                            pos: [h, k, l],
                        };
                    } else {
                        //Hiperboloide
                        if (negativos === 1) {
                            figura = "Hiperboloide 1 hoja";
                            let eje = null;

                            if (a2 < 0) {
                                eje = "X";
                            }

                            if (b2 < 0) {
                                eje = "Y";
                            }

                            if (c2 < 0) {
                                eje = "Z";
                            }

                            info = `Se localiza sobre el eje ${eje}`;
                            punto = {
                                nombre: "Centro",
                                letra: "C",
                                pos: [h, k, l],
                            };
                        } else if (negativos === 2) {
                            figura = "Hiperboloide 2 hojas";
                            let eje = null;

                            if (a2 >= 0) {
                                eje = "X";
                            }

                            if (b2 >= 0) {
                                eje = "Y";
                            }

                            if (c2 >= 0) {
                                eje = "Z";
                            }

                            info = `Se localiza sobre el eje ${eje}`;
                            punto = {
                                nombre: "Centro",
                                letra: "C",
                                pos: [h, k, l],
                            };
                        }
                    }
                } else {
                    if (negativos === 0 || negativos === 3) {
                        figura = "Punto";
                        punto = {
                            nombre: "Punto",
                            letra: "P",
                            pos: [h, k, l],
                        };
                    } else if (negativos < 3) {
                        figura = "Cono Elíptico";
                        let eje = null;
                        if (negativos === 1) {
                            if (A < 0) {
                                eje = "X";
                            }

                            if (B < 0) {
                                eje = "Y";
                            }

                            if (C < 0) {
                                eje = "Z";
                            }
                        }

                        if (negativos === 2) {
                            if (A > 0) {
                                eje = "X";
                            }

                            if (B > 0) {
                                eje = "Y";
                            }

                            if (C > 0) {
                                eje = "Z";
                            }
                        }

                        info = `Se localiza sobre el eje ${eje}`;
                    }
                }
            } else if (nulos.length === 1) {
                if (M === 0) {
                    if (negativos === 0 || negativos === 2) {
                        figura = "Línea";
                        let eje = "X";

                        if (b2 === null) {
                            eje = "Y";
                        }

                        if (c2 === null) {
                            eje = "Z";
                        }

                        info = `Es paralela al eje ${eje}.`;
                        punto = {
                            nombre: "Punto",
                            letra: "P",
                            pos: [h, k, l],
                        };
                    } else if (negativos === 1) {
                        figura = "Planos que se intersecan";
                        let eje = null;

                        if (a2 === null) {
                            eje = "X";
                        }

                        if (b2 === null) {
                            eje = "Y";
                        }

                        if (c2 === null) {
                            eje = "Z";
                        }
                        info = `Corresponde se intersecan en el eje ${eje}`;
                    }
                } else {
                    if (negativos === 0) {
                        figura = "Cilindro Elíptico";
                        punto = {
                            nombre: "Centro",
                            letra: "C",
                            pos: [h, k, l],
                        };
                        let eje = null;

                        if (a2 === null) {
                            eje = "X";
                        }

                        if (b2 === null) {
                            eje = "Y";
                        }

                        if (c2 === null) {
                            eje = "Z";
                        }

                        info = `Se localiza sobre el eje ${eje}`;
                    } else if (negativos === 1) {
                        figura = "Cilindro Hiperbólico";
                        punto = {
                            nombre: "Centro",
                            letra: "C",
                            pos: [h, k, l],
                        };
                        let eje = null;

                        if (a2 === null) {
                            eje = "X";
                        }

                        if (b2 === null) {
                            eje = "Y";
                        }

                        if (c2 === null) {
                            eje = "Z";
                        }

                        info = `Se localiza sobre el eje ${eje}`;
                    }
                }
            } else if (nulos.length === 2) {
                if (M === 0) {
                    figura = "Plano";

                    let plano = "";

                    if (a2 === null) {
                        plano += "X";
                    }

                    if (b2 === null) {
                        plano += "Y";
                    }

                    if (c2 === null) {
                        plano += "Z";
                    }

                    punto = {
                        nombre: "Punto",
                        letra: "P",
                        pos: [h, k, l],
                    };

                    info = `Es paralelo al plano ${plano}. `;

                    if (D !== 0) {
                        info += `Corta al eje X en ${h}. `;
                    }

                    if (E !== 0) {
                        info += `Corta al eje Y en ${k}. `;
                    }

                    if (F !== 0) {
                        info += `Corta al eje Z en ${l}. `;
                    }
                } else if (negativos === 0 && M !== 0) {
                    figura = "Planos Paralelos";
                    let eje = null;
                    let distancia = null;
                    let centro = null;

                    if (a2 !== null) {
                        eje = "X";
                        distancia = a2;
                        centro = h;
                    }

                    if (b2 !== null) {
                        eje = "Y";
                        distancia = b2;
                        centro = k;
                    }

                    if (c2 !== null) {
                        eje = "Z";
                        distancia = c2;
                        centro = l;
                    }

                    distancia = Math.sqrt(distancia).toFixed(2) * 2;
                    let punto1 = (centro + distancia / 2).toFixed(2);
                    let punto2 = (centro - distancia / 2).toFixed(2);

                    info = `Son perpendiculares al eje ${eje}. Hay una distancia de ${distancia} unidades entre ambos planos. Cortan al eje ${eje} en ${punto1} y ${punto2}`;
                }
            }
        } else if (lineales.length > 0) {
            figura = "Plano";
            info = "";

            if (D !== 0) {
                let ejeX = -G / D;
                info += `Corta al eje X en ${ejeX}. `;
            }

            if (E !== 0) {
                let ejeY = -G / E;
                info += `Corta al eje Y en ${ejeY}. `;
            }

            if (F !== 0) {
                let ejeZ = -G / F;
                info += `Corta al eje Z en ${ejeZ}. `;
            }
        }
    }

    if (punto) {
        punto = {
            ...punto,
            pos: punto ? punto.pos.map((e) => e.toFixed(2)) : null,
        };
    }

    return {
        figura,
        punto,
        info,
    };
}

export default ecuacionGeneral;
