import { useEffect, useRef, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchFavoriteCoins } from "../../store/slices/coinsSlice";
import { useStyles } from "./styles";

import { Box, Grid, Typography } from "@mui/material";
import { GraphCardItem } from "../../components/graph-card-item";

export const HomePage = () => {
	const dispatch = useAppDispatch();
	const { favoriteCoins } = useAppSelector((state) => state.coinsReducer);
	const fetchDataRef = useRef(false);
	const classes = useStyles();

	interface Coin {
		name: string;
		price: number;
	}

	const coinArray = useMemo(() => ["bitcoin", "ethereum"], []);

	const filteredArray: Coin[] = favoriteCoins.reduce((acc: Coin[], curr: Coin) => {
		if (!acc.some((coin) => coin.name === curr.name)) acc.push(curr);
		return acc;
	}, []);

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
			<Grid container spacing={2}>
				{filteredArray.map((item) => (
					<GraphCardItem key={item.name} item={item} />
				))}
			</Grid>
		</Box>
	);
};
