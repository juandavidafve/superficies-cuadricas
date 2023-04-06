import React from "react";

class Grafica extends React.Component {
    actualizar() {
        let eq = this.props.ecuacion;
        let elemento = document.querySelector("#ggb-element");
        let ggb = new window.GGBApplet({
            appName: "3d",
            width: elemento.offsetWidth,
            height: window.innerHeight,
            showToolBar: false,
            showMenuBar: false,
            showAlgebraInput: false,
            showResetIcon: false,
            enableLabelDrags: false,
            enableShiftDragZoom: true,
            enableRightClick: false,
            showToolBarHelp: false,
            errorDialogsActive: true,
            useBrowserForJS: false,
            appletOnLoad(api) {
                api.evalCommand(eq);
            },
        });
        ggb.inject("ggb-element");
    }

    render() {
        return <div className="container" id="ggb-element"></div>;
    }
}

export default Grafica;
