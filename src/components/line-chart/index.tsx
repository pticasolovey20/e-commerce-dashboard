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
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	const values = {
		labels: data[0].price_chart_data.map((item: number[]) => formatDate(item[0])),
		datasets: [
			{
				label: "Price",
				data: data[0].price_chart_data.map((item: number[]) => item[1]),
				borderColor: "rgb(255,99,132)",
				backgroundColor: "rgba(255,99,132,0.5)",
			},
		],
	};

	return <Line options={options} data={values} width="100%" height="20%" />;
};
