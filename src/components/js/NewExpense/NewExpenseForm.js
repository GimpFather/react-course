import { useState } from "react";

const NewExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState();
	const [enteredPrice, setEnteredPrice] = useState();
	const [enteredDate, setEnteredDate] = useState();

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const priceChangeHandler = (event) => {
		setEnteredPrice(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const expensesData = {
			title: enteredTitle,
			price: enteredPrice,
			date: new Date(enteredDate),
		};

		console.log(expensesData);

		setEnteredTitle("");
		setEnteredPrice("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__forms">
				<div className="new-expense__form">
					<label>Title</label>
					<input
						type="text"
						onChange={titleChangeHandler}
						value={enteredTitle}
					/>
				</div>
				<div className="new-expense__form">
					<label>Price</label>
					<input
						type="number"
						onChange={priceChangeHandler}
						value={enteredPrice}
					/>
				</div>
				<div className="new-expense__form">
					<label>Date</label>
					<input type="date" onChange={dateChangeHandler} value={enteredDate} />
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
};

export default NewExpenseForm;
