import { FC, useEffect, useRef, useCallback, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchFavoriteCoins } from "../../store/slices/coinsSlice";
import { useStyles } from "./styles";
import { ICoin } from "../../types/ICoin";

import { Box, Grid } from "@mui/material";
import { GraphCardItem } from "../../components/graph-card-item";

export const HomePage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const { favoriteCoins } = useAppSelector((state) => state.coinsReducer);
	const fetchDataRef = useRef(false);
	const classes = useStyles();

	const coinArray = useMemo(() => ["bitcoin", "ethereum"], []);

	const filteredArray: ICoin[] = favoriteCoins.reduce((acc: ICoin[], curr: ICoin) => {
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
