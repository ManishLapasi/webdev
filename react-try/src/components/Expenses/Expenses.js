import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import "./ExpenseDate.css";
import "./Expenses.css";

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {day:'2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );   
}

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.values.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.values.place}</h2>
                <div className="expense-item__price">${props.values.amount}</div>
            </div>
        </div>
    );
}

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem values={props.values[0]}></ExpenseItem>
            <ExpenseItem values={props.values[1]}></ExpenseItem>
        </Card>
    )
}

export default Expenses;