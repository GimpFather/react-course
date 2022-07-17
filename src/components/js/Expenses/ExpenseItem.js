import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
	return (
		<Card className="expense-item">
			<div>
				<ExpenseItemDate date={props.date}></ExpenseItemDate>
			</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<h2 className="expense-item__price">{props.price}</h2>
			</div>
		</Card>
	);
};

export default ExpenseItem;
