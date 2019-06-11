import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';

class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstValue: 0,
            secondValue: 0,
            total: 0,
            homePage: true,
            operator: ''
        };

        this.handleChangeFirstValue = this.handleChangeFirstValue.bind(this);
        this.handleChangeSecondValue = this.handleChangeSecondValue.bind(this);
        this.calculateResult = this.calculateResult.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.changeOperator = this.changeOperator.bind(this);
    }

    calculateResult() {
        let firstNumber = this.state.firstValue
        let secondNumber = this.state.secondValue
        let result = 0;
        switch (this.state.operator) {
            case 'SOM':
                result = Number(firstNumber) + Number(secondNumber);
                break;
            case 'MUL':
                result = Number(firstNumber) * Number(secondNumber);
                break;
            case 'SUB':
                result = Number(firstNumber) - Number(secondNumber);
                break;
            case 'DIV':
                result = Number(firstNumber) / Number(secondNumber);
                break;
        }
        this.setState({
            total: result,
            homePage: false
        })
    }

    handleChangeFirstValue(event) {
        this.setState({ firstValue: event.target.value }, () => {
            this.calculateResult()
        })
    }

    handleChangeSecondValue(event) {
        this.setState({ secondValue: event.target.value }, () => {
            this.calculateResult()
        })
    }

    changeOperator(event) {
        this.setState({
            operator: event.target.value,
            homePage: !this.state.homePage
        }, () => this.calculateResult())

    }

    handleBackClick() {
        this.setState({
            homePage: true,
            firstValue: 0,
            secondValue: 0,
            operator: '',
            total: 0
        })
    }

    render() {
        if (this.state.homePage) {
            return (
                <div>
                    <div>
                        <button value='SOM' onClick={this.changeOperator}>Somar</button>
                        <button value='MUL' onClick={this.changeOperator}>Multiplicar</button>
                    </div>
                    <div>
                        <button value='DIV' onClick={this.changeOperator}>Dividir</button>
                        <button value='SUB' onClick={this.changeOperator}>Subtrair</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <input type='number' onChange={this.handleChangeFirstValue} />
                        <input type='number' onChange={this.handleChangeSecondValue} />
                    </div>
                    <label>Total: {this.state.total}</label>
                    <div>
                        <button onClick={this.handleBackClick}>Voltar</button>
                    </div>
                </div>
            )
        }
    }
}
ReactDOM.render(
    <Calculadora />,
    document.getElementById('root')
)