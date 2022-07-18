//styles + data
import "./components/scss/index.scss";
import expensesData from "./data/expenses";

//components
import Expenses from "./components/js/Expenses/Expenses";
import NewExpense from "./components/js/NewExpense/NewExpense";

const App = () => {
	const expenses = expensesData;

	const addExpenseHandler = (expense) => {
		console.log(expense);
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
