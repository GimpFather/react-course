//styles + data
import "./components/scss/index.scss";
import expensesData from "./data/expenses";

//components
import Expenses from "./components/js/Expenses/Expenses";
import NewExpense from "./components/js/NewExpense/NewExpense";

const App = () => {
	const expenses = expensesData;

	return (
		<div>
			<div>
				<NewExpense></NewExpense>
			</div>
			<div>
				<Expenses expenses={expenses}></Expenses>
			</div>
		</div>
	);
};

export default App;
