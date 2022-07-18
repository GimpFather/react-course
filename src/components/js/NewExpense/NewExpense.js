import Card from "../Card/Card";
import NewExpenseForm from "./NewExpenseForm";

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
			<NewExpenseForm
				onSaveExpenseData={saveExpenseDataHandler}
			></NewExpenseForm>
		</Card>
	);
};

export default NewExpense;
