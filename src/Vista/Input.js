import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: null,
            name: this.props.name,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async handleChange(event) {
        let notNumber = /[^\d-]/g;

        if (notNumber.test(event.target.value)) {
            event.target.value = 0;
        }

        console.log("Cambio");

        const valor = parseInt(event.target.value);

        if (this.props.min && valor < this.props.min) {
            event.target.value = this.props.min;
        }

        if (this.props.max && valor > this.props.max) {
            event.target.value = this.props.max;
        }

        await this.setState({
            ...this.state,
            valor,
        });
        this.props.agregarValor(this.state);
    }

    render() {
        return (
            <input
                className={this.props.className}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
            ></input>
        );
    }
}

export default Input;
