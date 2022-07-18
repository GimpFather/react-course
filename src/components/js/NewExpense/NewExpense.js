import Card from "../Card/Card";
import NewExpenseSwitch from "./NewExpenseSwitch";

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
	};
	return (
		<Card className="new-expense">
			<NewExpenseSwitch event={saveExpenseDataHandler}></NewExpenseSwitch>
		</Card>
	);
};

export default NewExpense;
