import { useState } from "react";

import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [year, setYear] = useState("2021");

	const filterYearHandler = (pickedYear) => {
		setYear(pickedYear);
	};

	const filteredExpensesByYear = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === year;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				selectedYear={year}
				onPickedYear={filterYearHandler}
			></ExpensesFilter>
			<ExpensesChart expenses={filteredExpensesByYear}></ExpensesChart>
			<ExpensesList data={filteredExpensesByYear}></ExpensesList>
		</Card>
	);
};

export default Expenses;
