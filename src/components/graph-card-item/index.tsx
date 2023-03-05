import { FC } from "react";
import { useStyles } from "./styles";
import { GraphCardProps, ISingleCoin } from "../../types/coins";

import { Box, Grid, Typography } from "@mui/material";
import { AreaChart } from "../area-chart";
import { LayoutChart } from "../layout-chart";

import TrendUp from "../../assets/images/graph-card-item/trend-up.svg";
import TrendDown from "../../assets/images/graph-card-item/trend-down.svg";

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
					<Typography variant="h3" className={classes.coinName}>
						{item.name}
					</Typography>
					<Box className={classes.itemDetails}>
						<Typography variant="h3" className={classes.cardPrice}>
							{currentPrice}
						</Typography>
						<Box
							className={
								changePrice > 0
									? `${classes.priceTrend} ${classes.trendUp}`
									: `${classes.priceTrend} ${classes.trendDown}`
							}
						>
							{changePrice > 0 ? <img src={TrendUp} alt="trend" /> : <img src={TrendDown} alt="trend" />}
							<Typography>{Number(changePrice).toFixed(2)}%</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} lg={6}>
					<AreaChart prices={item.price_chart_data} />
				</Grid>
			</LayoutChart>
		</Grid>
	);
};
