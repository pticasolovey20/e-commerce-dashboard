import { FC } from "react";
import { useStyles } from "./styles";
import { IGraphCardProps } from "../../types/IGraphCardProps";

import { Box, Grid, Typography } from "@mui/material";
import { AreaChart } from "../area-chart";

import TrendUp from "../../assets/images/graph-card-item/trend-up.svg";
import TrendDown from "../../assets/images/graph-card-item/trend-down.svg";

export const GraphCardItem: FC<IGraphCardProps> = ({ item }: IGraphCardProps): JSX.Element => {
	const classes = useStyles();

	const currentPrice = item.singleCoin.map((item: any) => item.current_price);
	const changePrice = item.singleCoin.map((item: any) => item.price_change_percentage_24h);

	return (
		<Grid item xs={12} md={6} lg={6} key={item.name}>
			<Grid container className={classes.graphItem}>
				<Grid item xs={12} md={6} lg={6}>
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
				<Grid item xs={12} md={6} lg={6}>
					<AreaChart prices={item.data} />
				</Grid>
			</Grid>
		</Grid>
	);
};
