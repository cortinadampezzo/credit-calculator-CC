import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Redirect} from 'react-router-dom';
import {TextInput, Button, Row, Col, Card, Modal} from 'react-materialize';

class Form extends Component {

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
            fetch('http://localhost:8000/monthly-payment', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        loanAmount: this.state.data.loanAmount,
                        monthlyPayment: this.state.data.monthlyPayment,
                        interestRate: this.state.data.interestRate,
                        repaymentTime: this.state.data.repaymentTime
                    }
                )
            });
        } else if (this.state.data.loanAmount === '') {
            fetch('http://localhost:8000/loan-amount', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        loanAmount: this.state.data.loanAmount,
                        monthlyPayment: this.state.data.monthlyPayment,
                        interestRate: this.state.data.interestRate,
                        repaymentTime: this.state.data.repaymentTime
                    }
                )
            });
        } else if (this.state.data.repaymentTime === '') {
            fetch('http://localhost:8000/repayment-time', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                        loanAmount: this.state.data.loanAmount,
                        monthlyPayment: this.state.data.monthlyPayment,
                        interestRate: this.state.data.interestRate,
                        repaymentTime: this.state.data.repaymentTime
                    }
                )
            });
        }
        this.state.data = '';
        setTimeout(() => {
            fetch('http://localhost:8000/result',
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
                            <Card className="my-card">
                                <TextInput label="Loan amount" onChange={this.loanAmountChange.bind(this)}></TextInput>
                                <TextInput label="Interest rate" onChange={this.interestRateChange.bind(this)}></TextInput>
                                <TextInput label="Repayment time" onChange={this.repaymentTimeChange.bind(this)}></TextInput>
                                <TextInput label="Monthly payment" onChange={this.monthlyPaymentChange.bind(this)}></TextInput>
                                <Button  href="#modal1" className="modal-trigger" disabled={!isEnabled || four} onClick={this.onSubmit.bind(this)}>Calculate</Button>
                                <Modal id="modal1" >
                                    <p>Loan amount: {this.state.data.loanAmount} Ft </p>
                                    <p>Interest rate: {this.state.data.interestRate} % </p>
                                    <p>Repayment time: {this.state.data.repaymentTime} years </p>
                                    <p>Monthly payment: {this.state.data.monthlyPayment} Ft/month </p>
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
