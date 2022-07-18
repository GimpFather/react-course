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
			<ExpenseItem
				title={props.expenses[0].title}
				price={props.expenses[0].amount}
				date={props.expenses[0].date}
			/>
			<ExpenseItem
				title={props.expenses[1].title}
				price={props.expenses[1].amount}
				date={props.expenses[1].date}
			/>
		</Card>
	);
};

export default Expenses;
