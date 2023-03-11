import { FC, useEffect, useCallback, useRef, useState } from "react";
import { useStyles } from "./styles";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchPricesFirst, fetchPricesSecond } from "../../store/slices/coinsSlice";
import { formatDate } from "../../utils/format-date";
import { ICoinsData } from "../../types/coins";

import { Box, Grid, SelectChangeEvent } from "@mui/material";
import { SelectComponent } from "../select";
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

export const LineGraphComponent: FC = (): JSX.Element => {
	const classes = useStyles();
	const pricesFirst: ICoinsData = useAppSelector((state) => state.coinsReducer.pricesFirst);
	const pricesSecond: ICoinsData = useAppSelector((state) => state.coinsReducer.pricesSecond);

	const dispatch = useAppDispatch();

	const fetchDataRef = useRef(false);
	const [firstValue, setFirstValue] = useState("");
	const [secondValue, setSecondValue] = useState("");

	const fetchData = useCallback(
		(first: string, second: string) => {
			dispatch(fetchPricesFirst(first ? first : "bitcoin"));
			dispatch(fetchPricesSecond(second ? second : "wrapped-bitcoin"));
		},
		[dispatch]
	);

	useEffect(() => {
		if (fetchDataRef.current) return;
		fetchDataRef.current = true;
		fetchData(firstValue, secondValue);
	}, [dispatch, fetchData, firstValue, secondValue]);

	const handleChangeFirst = (event: SelectChangeEvent<string>) => {
		const value = event.target.value;
		setFirstValue(value);
		dispatch(fetchPricesFirst(value));
	};
	const handleChangeSecond = (event: SelectChangeEvent<string>) => {
		const value = event.target.value;
		setSecondValue(value);
		dispatch(fetchPricesSecond(value));
	};

	const labels = Object.keys(pricesFirst).length ? pricesFirst.price_chart.map((item) => formatDate(item[0])) : [];
	const data1 = Object.keys(pricesFirst).length && pricesFirst.price_chart.map((item) => item[1]);
	const data2 = Object.keys(pricesSecond).length && pricesSecond.price_chart.map((item) => item[1]);

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
				position: Object.keys(pricesFirst).length ? ("top" as const) : undefined,
				display: Object.keys(pricesFirst).length ? true : false,
			},
		},
	};

	const values = {
		labels,
		datasets: [
			{
				label: Object.keys(pricesFirst).length
					? pricesFirst.name.charAt(0).toUpperCase() + pricesFirst.name.slice(1)
					: "",
				data: data1,
				borderColor: "#35d438",
				backgroundColor: "#35d438",
			},
			{
				label: Object.keys(pricesSecond).length
					? pricesSecond.name.charAt(0).toUpperCase() + pricesSecond.name.slice(1)
					: "",
				data: data2,
				borderColor: "#aa2db5",
				backgroundColor: "#aa2db5",
			},
		],
	};

	return (
		<Grid container>
			<Grid item lg={12} sm={12} className={classes.selector}>
				<Box className={classes.inputBox}>
					<SelectComponent value={firstValue} onChange={handleChangeFirst} />
				</Box>
				<Box className={classes.inputBox}>
					<SelectComponent value={secondValue} onChange={handleChangeSecond} />
				</Box>
			</Grid>
			<Grid item lg={12} sm={12}>
				<Line options={options} data={values} width="100%" height="23px" />
			</Grid>
		</Grid>
	);
};
