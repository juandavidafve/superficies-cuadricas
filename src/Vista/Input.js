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
        let notNumber = /[^\d\-\+.\/]/g;

        if (notNumber.test(event.target.value)) {
            event.target.value = 0;
        }

        await this.setState({
            ...this.state,
            valor: event.target.value,
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
