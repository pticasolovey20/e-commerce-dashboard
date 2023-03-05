import { FC, useEffect, useRef, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchFavoriteCoins } from "../../store/slices/coinsSlice";
import { useStyles } from "./styles";
import { IChartData } from "../../types/coins/index";

import { Box, Grid } from "@mui/material";
import { GraphCardItem } from "../../components/graph-card-item";
import { LineChart } from "../../components/line-chart";
import { LayoutChart } from "../../components/layout-chart";

export const HomePage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const favoriteCoins: IChartData[] = useAppSelector((state) => state.coinsReducer.favoriteCoins);
	const fetchDataRef = useRef(false);
	const classes = useStyles();

	const coinArray = useMemo(() => ["bitcoin", "ethereum"], []);

	const filteredArray = useMemo(() => {
		return favoriteCoins.filter((item, index, array) => index === array.findIndex((e) => e.name === item.name));
	}, [favoriteCoins]);

	const fetchData = useCallback(
		(array: string[]) => {
			array.forEach((item: string) => {
				dispatch(fetchFavoriteCoins(item));
			});
		},
		[dispatch]
	);

	useEffect(() => {
		if (fetchDataRef.current) return;
		fetchDataRef.current = true;
		fetchData(coinArray);
	}, [coinArray, fetchData]);

	return (
		<Box className={classes.root}>
			<Grid container spacing={4} className={classes.areaChart}>
				{filteredArray.map((item: IChartData) => (
					<GraphCardItem key={item.name} item={item} />
				))}
			</Grid>
			<LayoutChart>
				<Grid item xs={12} sm={12} lg={12}>
					{filteredArray.length && <LineChart data={filteredArray} />}
				</Grid>
			</LayoutChart>
		</Box>
	);
};
