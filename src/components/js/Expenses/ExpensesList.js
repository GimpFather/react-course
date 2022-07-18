import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
	if (props.data.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses found.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.data.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					price={expense.price}
					date={expense.date}
				></ExpenseItem>
			))}
		</ul>
	);
};

export default ExpensesList;
