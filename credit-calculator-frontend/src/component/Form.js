import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {TextInput, Button, Row, Col, Card, Modal} from 'react-materialize';

class Form extends Component {

    postMonthlyPayment = "http://localhost:8000/monthly-payment";
    postLoanAmount = "http://localhost:8000/loan-amount";
    postRepaymentTime = "http://localhost:8000/repayment-time";
    getResult = "http://localhost:8000/result";

    constructor(props) {
        super(props);

        this.state = {
            data: {
            loanAmount: '',
            interestRate: '',
            repaymentTime: '',
            monthlyPayment: ''}
        };
    }

    loanAmountChange = (e) => {
        let data = this.state.data;
        data.loanAmount = e.target.value;
        this.setState({data: data,});
    };

    interestRateChange = (e) => {
        let data = this.state.data;
        data.interestRate = e.target.value;
        this.setState({data: data,});
    };

    repaymentTimeChange = (e) => {
        let data = this.state.data;
        data.repaymentTime = e.target.value;
        this.setState({data: data,});
    };

    monthlyPaymentChange = (e) => {
        let data = this.state.data;
        data.monthlyPayment = e.target.value;
        this.setState({data: data,});
    };


    onSubmit() {
        if (this.state.data.monthlyPayment === '') {
            fetch(this.postMonthlyPayment, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...this.state.data}
                )
            });
        } else if (this.state.data.loanAmount === '') {
            fetch(this.postLoanAmount, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...this.state.data}
                )
            });
        } else if (this.state.data.repaymentTime === '') {
            fetch(this.postRepaymentTime, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...this.state.data}
                )
            });
        }
        this.state.data = '';
        setTimeout(() => {
            fetch(this.getResult,
                {method: "PUT", headers: {"Content-Type": "application/json"}})
                .then(response => response.json())
                .then(data => this.setState({data}));
        }, 500);

    }

    render() {
        let isEnabled = (this.state.data.loanAmount.length > 0 && this.state.data.interestRate.length > 0 && this.state.data.repaymentTime.length > 0) ||
            (this.state.data.loanAmount.length > 0 && this.state.data.interestRate.length > 0 && this.state.data.monthlyPayment.length > 0) ||
            (this.state.data.interestRate.length > 0 && this.state.data.repaymentTime.length > 0 && this.state.data.monthlyPayment.length > 0);
        let four = this.state.data.loanAmount.length > 0 && this.state.data.interestRate.length > 0 && this.state.data.repaymentTime.length > 0 && this.state.data.monthlyPayment.length > 0;
        return (
            <Router>
                <div>
                    <Row>
                        <Col m={6} s={12}>
                            <Card title="Credit Calculator" className="my-card">
                                <TextInput type="number" label="Loan amount (Ft)" onChange={this.loanAmountChange.bind(this)}></TextInput>
                                <TextInput type="number" label="Interest rate (%)" onChange={this.interestRateChange.bind(this)}></TextInput>
                                <TextInput type="number" label="Repayment time (years)" onChange={this.repaymentTimeChange.bind(this)}></TextInput>
                                <TextInput type="number" label="Monthly payment (Ft/month)" onChange={this.monthlyPaymentChange.bind(this)}></TextInput>
                                <Button href="#help" className="modal-trigger">Help</Button>
                                <Modal id="help" header="Help">
                                    <p>This is our credit calculator.<br />
                                        If you have three parameter of your credit, you can easily count the fourth.<br />
                                        You must fill the interest rate field and two other optional fields.<br /><br />
                                        Please keep mind that if you choose unreal numbers, the calculator might not work perfectly.</p>
                                        <p align="right">© János Márton & Gábor Gansperger 2019</p>
                                    <a href="/"><Button>Close</Button></a>
                                </Modal>
                                <Button  href="#modal1" className="modal-trigger" disabled={!isEnabled || four} onClick={this.onSubmit.bind(this)}>Calculate</Button>
                                <Modal id="modal1" header="Details">
                                    <p>Loan amount: {this.state.data.loanAmount} Ft </p>
                                    <p>Interest rate: {this.state.data.interestRate} % </p>
                                    <p>Repayment time: {this.state.data.repaymentTime} years </p>
                                    <p>Monthly payment: {this.state.data.monthlyPayment} Ft/month </p>
                                    <a href="/"><Button>Close</Button></a>
                                </Modal>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Router>

        );
    }

}

export default Form;
