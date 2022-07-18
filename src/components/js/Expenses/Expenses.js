import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
	const [year, setYear] = useState("2021");

	const filterYearHandler = (pickedYear) => {
		setYear(pickedYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selectedYear={year}
				onPickedYear={filterYearHandler}
			></ExpensesFilter>
			{props.expenses.map((expense) => (
				<ExpenseItem
					title={expense.title}
					price={expense.price}
					date={expense.date}
				></ExpenseItem>
			))}
		</Card>
	);
};

export default Expenses;
