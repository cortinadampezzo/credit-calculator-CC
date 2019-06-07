import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

function GenerateForm() {
    return (
        <div>
            <form className={"form"}>
                <Form.Group controlId="formLoanAmount">
                    <Form.Label>Loan Amount</Form.Label>
                    <Form.Control type="text" placeholder="Enter loan amount"/>
                    <Form.Text className="text-muted">
                        The amount of credit.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formInterestingRate">
                    <Form.Label>Interesting Rate</Form.Label>
                    <Form.Control type="text" placeholder="Enter interesting rate"/>
                    <Form.Text className="text-muted">
                        The credit's interest in percentage.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formRepaymentTime">
                    <Form.Label>Repayment Time</Form.Label>
                    <Form.Control type="text" placeholder="Enter repayment time"/>
                    <Form.Text className="text-muted">
                        The credit's repayment time in year.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formMonthlyPayment">
                    <Form.Label>Monthly Payment</Form.Label>
                    <Form.Control type="text" placeholder="Enter monthly payment"/>
                    <Form.Text className="text-muted">
                        The credit's monthly payment.
                    </Form.Text>
                </Form.Group>
                <Button type="submit" variant="outline-primary" size="lg">Submit</Button>
            </form>
        </div>
    );
}

export default GenerateForm;
