import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";

const Expenses = (props) => {
	return (
		<Card className="expenses">
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
