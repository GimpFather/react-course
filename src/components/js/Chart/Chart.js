import ChartBar from "./ChartBar";

const Chart = (props) => {
	const monthValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const maxValue = Math.max(...monthValues);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={maxValue}
					label={dataPoint.label}
				></ChartBar>
			))}
		</div>
	);
};

export default Chart;
