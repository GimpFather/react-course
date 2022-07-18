const DYNAMIC_MONTHS = Array.from({ length: 12 }, (e, i) => {
	return [
		{
			label: new Date(null, i + 1, null).toLocaleDateString("en", {
				month: "short",
			}),
			value: 0,
		},
	];
});

const STATIC_MONTHS = [
	{
		label: "Jan",
		value: 0,
	},
	{
		label: "Feb",
		value: 0,
	},
	{
		label: "Mar",
		value: 0,
	},
	{
		label: "Apr",
		value: 0,
	},
	{
		label: "May",
		value: 0,
	},
	{
		label: "Jun",
		value: 0,
	},
	{
		label: "Jul",
		value: 0,
	},
	{
		label: "Aug",
		value: 0,
	},
	{
		label: "Sep",
		value: 0,
	},
	{
		label: "Oct",
		value: 0,
	},
	{
		label: "Nov",
		value: 0,
	},
	{
		label: "Dec",
		value: 0,
	},
];

export default STATIC_MONTHS;
