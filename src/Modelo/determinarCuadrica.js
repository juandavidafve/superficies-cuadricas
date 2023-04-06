function getSigno(num) {
    return num > 0 ? "+" : "-";
}

function contar(array, caracter) {
    return array.filter((e) => e === caracter).length;
}

function determinarCuadrica(a, b, c, num, exp1, exp2, exp3) {
    let mensaje = "La ecuacion no es una cuádrica.";

    const signos = [getSigno(a), getSigno(b), getSigno(c)];
    const cuadrados = [exp1 === 2, exp2 === 2, exp3 === 2];

    if (a !== 0 && b !== 0 && c !== 0) {
        // no tiene divisores en 0

        if (contar(cuadrados, true) === 3) {
            // todas al cuadrado
            if (contar(signos, "+") === 3) {
                // todos los signos positivos
                if (num === 1) {
                    // igual a 1
                    if (a === b && b === c) {
                        // todos los denominadores iguales
                        mensaje =
                            "La ecuacion corresponde a una esfera, ya que sus denominadores son iguales.";
                    } else if (
                        (a === b && a !== c) ||
                        (a === c && a !== b) ||
                        (b === c && b !== a)
                    ) {
                        // Dos denominadores iguales
                        mensaje =
                            "La ecuacion corresponde a un esferoide ya que dos de sus denominadores son iguales.";
                    } else {
                        // Todos los denominadores diferentes
                        mensaje =
                            "La ecuacion corresponde a un elipsoide ya que sus denominadores son diferentes.";
                    }
                }
            } else {
                if (contar(signos, "-") === 1) {
                    // 1 signo negativo
                    if (num === 1) {
                        // igual a 1
                        mensaje =
                            "La ecuacion corresponde a un hiperbloide de 1 hoja, ya que esta igualada a 1, y tiene un denominador negativo.";
                    } else if (num === 0) {
                        // igual a 0
                        mensaje =
                            "La ecuacion corresponde a un cono elíptico, ya que esta igualada a cero, tiene un denominador negativo.";
                    }
                } else if (contar(signos, "-") === 2) {
                    // 2 signos negativo
                    if (num === 1) {
                        // igual a 1
                        mensaje =
                            "La ecuacion corresponde a un hiperboloide de 2 hojas ya que solo tiene un denominador positivo.";
                    }
                }
            }
        } else if (contar(cuadrados, true) === 2) {
            // falta el cuadrado en una de las 3 variables

            if (num === 1 || num === 0) {
                // igual a 0 o 1

                const signosCuadrados = signos.filter((e, i) => cuadrados[i]);
                // Los terminos cuadraticos son del mismo signo
                if (signosCuadrados[0] === signosCuadrados[1]) {
                    mensaje =
                        "La ecuacion corresponde a un paraboloide eliptico, ya una de sus variables no está elevada al cuadrado, y los términos cuantitativos cuadráticos son del mismo signo.";
                } else {
                    // Los terminos cuadraticos son de diferente signo
                    mensaje =
                        "La ecuacion corresponde a un paraboloide hiperbólico, ya una de sus variables no está elevada al cuadrado, y los términos cuantitativos cuadráticos son de signo contrario.";
                }
            }
        }
    } else {
        mensaje =
            "La ecuación produce una indeterminación. Uno de los divisores es 0.";
    }

    return mensaje;
}

export default determinarCuadrica;
