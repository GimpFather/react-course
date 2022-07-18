//styles + data
import "./components/scss/index.scss";
import expensesData from "./data/expenses";

import { useState } from "react";
import Expenses from "./components/js/Expenses/Expenses";
import NewExpense from "./components/js/NewExpense/NewExpense";

const STATIC_EXPENSES_DATA = expensesData;

const App = () => {
	const [expenses, setExpenses] = useState(STATIC_EXPENSES_DATA);

	const addExpenseHandler = (expense) => {
		console.log(expense);
		setExpenses((prevState) => {
			return [expense, ...prevState];
		});
	};

	return (
		<div>
			<div>
				<NewExpense onAddExpense={addExpenseHandler}></NewExpense>
			</div>
			<div>
				<Expenses expenses={expenses}></Expenses>
			</div>
		</div>
	);
};

export default App;
