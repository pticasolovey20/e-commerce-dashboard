import { FC } from "react";
import { formatDate } from "../../utils/format-date";
import { IAreaChartProps } from "../../types/IAreaChartProps";

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
	ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
	responsive: true,
	scales: {
		x: {
			display: false,
			grid: {
				display: false,
			},
		},
		y: {
			display: false,
			grid: {
				display: false,
			},
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

export const AreaChart: FC<IAreaChartProps> = ({ prices }: IAreaChartProps): JSX.Element => {
	const data = {
		labels: prices.map((item: number[]) => formatDate(item[0])),
		datasets: [
			{
				label: "Price",
				data: prices.map((item: number[]) => item[1]),
				fill: "start",
				backgroundColor: (context: ScriptableContext<"line">) => {
					const ctx = context.chart.ctx;
					const gradient = ctx.createLinearGradient(0, 0, 0, 180);
					gradient.addColorStop(0, "#C1EF00");
					gradient.addColorStop(1, "#232323");
					return gradient;
				},
			},
		],
	};

	return <Line options={options} data={data} width={300} height={100} />;
};