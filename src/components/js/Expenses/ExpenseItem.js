import { useState } from "react";

import ExpenseItemDate from "./ExpenseItemDate";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const handleButtonClick = () => {
		setTitle("Updated!");
	};

	return (
		<li>
			<Card className="expense-item">
				<div>
					<ExpenseItemDate date={props.date}></ExpenseItemDate>
				</div>
				<div className="expense-item__description">
					<h2>{title}</h2>
					<h2 className="expense-item__price">{props.price}</h2>
				</div>
				<div>
					<button onClick={handleButtonClick}>Change title</button>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
