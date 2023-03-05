import { FC } from "react";
import { formatDate } from "../../utils/format-date";
import { ILineChartProps } from "../../types/coins";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const LineChart: FC<ILineChartProps> = ({ data }: ILineChartProps): JSX.Element => {
	const options = {
		responsive: true,
		scales: {
			x: {
				display: false,
				grid: {
					display: false,
				},
			},
		},
		plugins: {
			legend: {
				position: "top" as const,
			},
		},
	};

	const values = {
		labels: data[0].price_chart_data.map((item: number[]) => formatDate(item[0])),
		datasets: [
			{
				label: data[0].name.charAt(0).toUpperCase() + data[0].name.slice(1),
				data: data[0].price_chart_data.map((item: number[]) => item[1]),
				borderColor: "rgb(255,99,132)",
				backgroundColor: "rgba(255,99,132,0.5)",
			},
		],
	};

	return <Line options={options} data={values} width="100%" height="20%" />;
};
