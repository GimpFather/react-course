import Card from "../Card/Card";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = () => {
	return (
		<Card className="new-expense">
			<NewExpenseForm></NewExpenseForm>
		</Card>
	);
};

export default NewExpense;
