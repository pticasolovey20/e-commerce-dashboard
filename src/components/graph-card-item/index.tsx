import { FC } from "react";
import { useStyles } from "./styles";
import { GraphCardProps, ISingleCoin } from "../../types/coins";

import { Box, Grid, Typography } from "@mui/material";
import { AreaChart } from "../area-chart";
import { LayoutChart } from "../layout-chart";
import { Trend } from "../trend";

export const GraphCardItem: FC<GraphCardProps> = ({ item }: GraphCardProps): JSX.Element => {
	const classes = useStyles();

	let currentPrice = 0;
	let changePrice = 0;

	item.singleCoin.forEach((item: ISingleCoin) => {
		currentPrice = item.current_price;
		changePrice = item.price_change_percentage_24h;
	});

	return (
		<Grid item key={item.name} xs={12} sm={6} lg={6}>
			<LayoutChart>
				<Grid item xs={12} sm={6} lg={6}>
					<AreaChart prices={item.price_chart_data} />
				</Grid>
				<Grid item xs={12} sm={6} lg={6}>
					<Typography variant="h3" className={classes.coinName}>
						{item.name}
					</Typography>
					<Box className={classes.itemDetails}>
						<Typography variant="h3" className={classes.cardPrice}>
							{currentPrice}$
						</Typography>
						<Trend value={changePrice} symbol={"%"} />
					</Box>
				</Grid>
			</LayoutChart>
		</Grid>
	);
};
