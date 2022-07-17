import Card from "../Card/Card";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = () => {
	return (
		<Card className="new-expense">
			<form>
				<NewExpenseForm></NewExpenseForm>
			</form>
		</Card>
	);
};

export default NewExpense;
