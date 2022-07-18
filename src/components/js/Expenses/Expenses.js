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
			{props.expenses
				.filter(
					(yearExpense) => yearExpense.date.getFullYear().toString() === year
				)
				.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						price={expense.price}
						date={expense.date}
					></ExpenseItem>
				))}
		</Card>
	);
};

export default Expenses;
