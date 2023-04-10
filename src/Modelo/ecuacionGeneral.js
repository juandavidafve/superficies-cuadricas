function ecuacionGeneral(A, B, C, D, E, F, G) {
    let mensaje = "";
    const esEsfera =
        A === B && A === C && ((A > 0 && G < 0) || (A < 0 && G > 0));
    const esElipsoide =
        (A !== B || A !== C || B !== C) &&
        ((A > 0 && B > 0 && C > 0 && G < 0) ||
            (A < 0 && B < 0 && C < 0 && G > 0));
    const esConoElíptico =
        D === 0 &&
        E === 0 &&
        F === 0 &&
        G === 0 &&
        ((A > 0 && B > 0 && C < 0) ||
            (A > 0 && B < 0 && C > 0) ||
            (A < 0 && B > 0 && C > 0) ||
            (A < 0 && B < 0 && C > 0) ||
            (A < 0 && B > 0 && C < 0) ||
            (A > 0 && B < 0 && C < 0));
    const esHiperboloide1Hoja =
        (((A > 0 && B > 0 && C < 0) ||
            (A > 0 && B < 0 && C > 0) ||
            (A < 0 && B > 0 && C > 0)) &&
            G < 0) ||
        (((A < 0 && B < 0 && C > 0) ||
            (A < 0 && B > 0 && C < 0) ||
            (A > 0 && B < 0 && C < 0)) &&
            G > 0);
    const esHiperboloide2Hojas =
        (((A > 0 && B > 0 && C < 0) ||
            (A > 0 && B < 0 && C > 0) ||
            (A < 0 && B > 0 && C > 0)) &&
            G > 0) ||
        (((A < 0 && B < 0 && C > 0) ||
            (A < 0 && B > 0 && C < 0) ||
            (A > 0 && B < 0 && C < 0)) &&
            G < 0);
    const esParaboloideElíptico =
        (A === 0 || B === 0 || C === 0) &&
        ((A > 0 && B > 0 && F !== 0) ||
            (A > 0 && C > 0 && E !== 0) ||
            (B > 0 && C > 0 && D !== 0) ||
            (A < 0 && B < 0 && F !== 0) ||
            (A < 0 && C < 0 && E !== 0) ||
            (B < 0 && C < 0 && D !== 0));
    const esParaboloideHiperbolico =
        (A === 0 || B === 0 || C === 0) &&
        ((A > 0 && B < 0 && F !== 0) ||
            (A > 0 && C < 0 && E !== 0) ||
            (B > 0 && C < 0 && D !== 0) ||
            (A < 0 && B > 0 && F !== 0) ||
            (A < 0 && C > 0 && E !== 0) ||
            (B < 0 && C > 0 && D !== 0));

    if (esEsfera) {
        mensaje = "La figura es una esfera.";
    } else if (esElipsoide) {
        mensaje = "La figura es un elipsoide.";
    } else if (esConoElíptico) {
        mensaje = "La figura es un cono elíptico.";
    } else if (esHiperboloide1Hoja) {
        mensaje = "La figura es un hiperboloide de una hoja.";
    } else if (esHiperboloide2Hojas) {
        mensaje = "La figura es un hiperboloide de dos hojas.";
    } else if (esParaboloideElíptico) {
        mensaje = "La figura es un paraboloide elíptico.";
    } else if (esParaboloideHiperbolico) {
        mensaje = "La figura es un paraboloide hiperbolico.";
    } else {
        mensaje = "La figura no es una cuádrica.";
    }

    return mensaje;
}

export default ecuacionGeneral;
