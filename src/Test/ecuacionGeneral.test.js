import ecuacionGeneral from "../Modelo/ecuacionGeneral";

it("Elipsoide", () => {
    let texto = "Elipsoide";
    expect(ecuacionGeneral(2, 3, 1, -8, 6, -4, -3).figura).toEqual(texto);
});

it("Esfera", () => {
    let texto = "Esfera";
    expect(ecuacionGeneral(2, 2, 2, -8, 6, -4, -3).figura).toEqual(texto);
});

it("Hiperboloide 1 hoja", () => {
    let texto = "Hiperboloide 1 hoja";
    expect(ecuacionGeneral(3, 4, -2, 6, -16, 8, -13).figura).toEqual(texto);
    expect(ecuacionGeneral(1, -1, -1, 0, 0, 0, 3).figura).toEqual(texto);
});

it("Hiperboloide 2 hojas", () => {
    let texto = "Hiperboloide 2 hojas";
    expect(ecuacionGeneral(3, -43, -23, 6, -16, 8, -13).figura).toEqual(texto);
    expect(ecuacionGeneral(1, 1, -1, 0, 0, 0, 3).figura).toEqual(texto);
});

it("Cilindro Elíptico", () => {
    let texto = "Cilindro Elíptico";
    expect(ecuacionGeneral(1, 4, 0, -6, -16, 0, 21).figura).toEqual(texto);
    expect(ecuacionGeneral(0, 1, 3, 0, 13, 4, 1).figura).toEqual(texto);
});

it("Cilindro Hiperbólico", () => {
    let texto = "Cilindro Hiperbólico";
    expect(ecuacionGeneral(-9, 4, 0, 0, 0, 0, -36).figura).toEqual(texto);
});

it("Planos Paralelos", () => {
    let texto = "Planos Paralelos";
    expect(ecuacionGeneral(1, 0, 0, 0, 0, 0, -16).figura).toEqual(texto);
});

it("Origen", () => {
    let texto = "Origen";
    expect(ecuacionGeneral(25, 81, 36, 0, 0, 0, 0).figura).toEqual(texto);
});

it("Cono Elíptico", () => {
    let texto = "Cono Elíptico";
    expect(ecuacionGeneral(4, -2, 9, 0, 0, 0, 0).figura).toEqual(texto);
});

it("Eje Coordenado", () => {
    let texto = "Eje Coordenado";
    expect(ecuacionGeneral(16, 2, 0, 0, 0, 0, 0).figura).toEqual(texto);
    expect(ecuacionGeneral(0, 35, 2, 0, 0, 0, 0).figura).toEqual(texto);
});

it("Planos que se intersecan", () => {
    let texto = "Planos que se intersecan";
    expect(ecuacionGeneral(2, 0, -4, 0, 0, 0, 0).figura).toEqual(texto);
    expect(ecuacionGeneral(0, -3, 1, 0, 0, 0, 0).figura).toEqual(texto);
});

it("Plano Coordenado", () => {
    let texto = "Plano Coordenado";
    expect(ecuacionGeneral(0, 2, 0, 0, 0, 0, 0).figura).toEqual(texto);
    expect(ecuacionGeneral(0, 0, -5, 0, 0, 0, 0).figura).toEqual(texto);
});

it("Paraboloide Elíptico", () => {
    let texto = "Paraboloide Elíptico";
    expect(ecuacionGeneral(3, 2, 0, -6, 8, -12, -13).figura).toEqual(texto);
    expect(ecuacionGeneral(-3, -2, 0, -6, -8, -12, -13).figura).toEqual(texto);
    expect(ecuacionGeneral(1, 1, 0, 1, 1, 1, 1).figura).toEqual(texto);
});

it("Paraboloide Hiperbólico", () => {
    let texto = "Paraboloide Hiperbólico";
    expect(ecuacionGeneral(3, -2, 0, -6, 8, -12, -13).figura).toEqual(texto);
});

it("Cilindro Parabólico", () => {
    let texto = "Cilindro Parabólico";
    expect(ecuacionGeneral(0, 0, 1, 0, 4, 0, 0).figura).toEqual(texto);
    expect(ecuacionGeneral(1, 0, 0, 1, 1, 0, 1).figura).toEqual(texto);
    expect(ecuacionGeneral(1, 0, 0, 1, 1, 1, 1).figura).toEqual(texto);
});

it("La figura no se reconoce.", () => {
    let texto = "La figura no se reconoce.";
});
