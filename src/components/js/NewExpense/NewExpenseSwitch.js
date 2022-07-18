import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpenseSwitch = (props) => {
	const [addingFlag, setAddingFlag] = useState(false);

	const swapButtonWithFormHandler = () => {
		setAddingFlag((prevState) => {
			return !prevState;
		});
	};

	if (addingFlag) {
		return (
			<NewExpenseForm
				onCancelForm={swapButtonWithFormHandler}
				onSaveExpenseData={props.event}
			></NewExpenseForm>
		);
	}

	return <button onClick={swapButtonWithFormHandler}>Add New Expense</button>;
};

export default NewExpenseSwitch;
