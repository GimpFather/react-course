const NewExpenseInput = (props) => {
	return (
		<div className="new-expense__form">
			<label>{props.topic}</label>
			<input
				type={props.type}
				onChange={props.onChange}
				name={props.topic}
				value={props.value}
			/>
		</div>
	);
};

export default NewExpenseInput;
