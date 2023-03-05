import { FC, useEffect, useRef, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchFavoriteCoins, getTopPrice } from "../../store/slices/coinsSlice";
import { useStyles } from "./styles";
import { IChartData, ISingleCoin } from "../../types/coins/index";

import { Box, Grid } from "@mui/material";
import { GraphCardItemComponent } from "../../components/graph-card-item";
import { LineChartComponent } from "../../components/line-chart";
import { LayoutChartComponent } from "../../components/layout-chart";
import { TopPriceComponent } from "../../components/top-price";

export const HomePage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const fetchDataRef = useRef(false);
	const classes = useStyles();

	const favoriteCoins: IChartData[] = useAppSelector((state) => state.coinsReducer.favoriteCoins);
	const coins: ISingleCoin[] = useAppSelector((state) => state.coinsReducer.coins);

	const coinArray = useMemo(() => ["bitcoin", "ethereum"], []);

	const filteredFavoriteCoins = useMemo(() => {
		return favoriteCoins.filter((item, index, array) => index === array.findIndex((e) => e.name === item.name));
	}, [favoriteCoins]);

	const filteredCoins = useMemo(() => {
		return coins
			.slice()
			.sort((a, b) => b.current_price - a.current_price)
			.slice(0, 5);
	}, [coins]);

	const fetchData = useCallback(
		(array: string[]) => {
			array.forEach((item: string) => {
				dispatch(fetchFavoriteCoins(item));
			});
			dispatch(getTopPrice());
		},
		[dispatch]
	);

	useEffect(() => {
		if (fetchDataRef.current) return;
		fetchDataRef.current = true;
		fetchData(coinArray);
		return;
	}, [coinArray, fetchData]);

	return (
		<Box className={classes.root}>
			<Grid container spacing={4}>
				{filteredFavoriteCoins.map((item: IChartData) => (
					<GraphCardItemComponent key={item.name} item={item} />
				))}
			</Grid>
			<LayoutChartComponent>
				<Grid item xs={12} sm={12} lg={12}>
					{filteredFavoriteCoins.length && <LineChartComponent data={filteredFavoriteCoins} />}
				</Grid>
			</LayoutChartComponent>
			<LayoutChartComponent>
				<Grid item xs={12} sm={12} lg={12}>
					{filteredCoins.length && <TopPriceComponent coins={filteredCoins} />}
				</Grid>
			</LayoutChartComponent>
		</Box>
	);
};
