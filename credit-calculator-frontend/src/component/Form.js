import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

class GenerateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
            loanAmount: null,
            interestRate: null,
            repaymentTime: null,
            monthlyPayment: null}
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
        if (this.state.data.monthlyPayment == null) {
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
        } else if (this.state.data.loanAmount == null) {
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
        } else if (this.state.data.repaymentTime == null) {
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
//        fetch('http://localhost:8000/')
//            .then(response => response.json());
        console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <form className={"form"}>
                    <Form.Group controlId="formLoanAmount">
                        <Form.Label>Loan Amount</Form.Label>
                        <Form.Control onChange={this.loanAmountChange.bind(this)} type="text" placeholder="Enter loan amount"/>
                        <Form.Text className="text-muted">
                            The amount of credit.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formInterestingRate">
                        <Form.Label>Interesting Rate</Form.Label>
                        <Form.Control onChange={this.interestRateChange.bind(this)} type="text" placeholder="Enter interesting rate"/>
                        <Form.Text className="text-muted">
                            The credit's interest in percentage.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formRepaymentTime">
                        <Form.Label>Repayment Time</Form.Label>
                        <Form.Control onChange={this.repaymentTimeChange.bind(this)} type="text" placeholder="Enter repayment time"/>
                        <Form.Text className="text-muted">
                            The credit's repayment time in year.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formMonthlyPayment">
                        <Form.Label>Monthly Payment</Form.Label>
                        <Form.Control onChange={this.monthlyPaymentChange.bind(this)} type="text" placeholder="Enter monthly payment"/>
                        <Form.Text className="text-muted">
                            The credit's monthly payment.
                        </Form.Text>
                    </Form.Group>
                    <Button type="submit" variant="outline-primary" size="lg" onClick={this.onSubmit.bind(this)}>Submit</Button>
                </form>
                <Button type="submit" variant="outline-primary" size="lg" onClick={this.onSubmit.bind(this)}>clickme</Button>

            </div>
        );
    }

}

export default GenerateForm;
