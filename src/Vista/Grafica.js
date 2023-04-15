import React from "react";

class Grafica extends React.Component {
    actualizar() {
        let eq = this.props.ecuacion;
        let punto = this.props.punto;
        let elemento = document.querySelector("#ggb-element");
        let ggb = new window.GGBApplet({
            appName: "3d",
            width: elemento.offsetWidth,
            height: window.innerHeight,
            showToolBar: false,
            showMenuBar: false,
            showAlgebraInput: true,
            showResetIcon: false,
            enableLabelDrags: false,
            enableShiftDragZoom: true,
            enableRightClick: false,
            showToolBarHelp: false,
            errorDialogsActive: true,
            useBrowserForJS: false,
            appletOnLoad(api) {
                api.evalCommand(eq);
                if (punto) {
                    api.evalCommand(
                        `${punto.letra} =(${punto.pos[0]},${punto.pos[1]},${punto.pos[2]})`
                    );
                }
            },
        });
        ggb.inject("ggb-element");
    }

    render() {
        return <div className="container" id="ggb-element"></div>;
    }
}

export default Grafica;
