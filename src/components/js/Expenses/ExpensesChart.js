import Chart from "../Chart/Chart";
import months from "../../../data/chart_data";

const ExpensesChart = (props) => {
	for (const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth();
		months[expenseMonth].value += expense.price;
	}

	return <Chart dataPoints={months}></Chart>;
};

export default ExpensesChart;
