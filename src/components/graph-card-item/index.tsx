import { FC } from "react";
import { useStyles } from "./styles";

import { Box, Grid, Typography } from "@mui/material";

interface PropsTypes {
	item: any;
}

export const GraphCardItem: FC<PropsTypes> = ({ item }: PropsTypes): JSX.Element => {
	const classes = useStyles();

	const currentPrice = item.data.prices[0];
	const currentCap = item.data.market_caps[0];
	return (
		<Grid item xs={12} md={6} lg={6} key={item.name}>
			<Grid container className={classes.graphItem}>
				<Grid item xs={12} md={6} lg={6}>
					<Typography variant="h3" className={classes.coinName}>
						{item.name}
					</Typography>
					<Box className={classes.itemDetails}>
						<Typography variant="h3" className={classes.cardPrice}>
							${currentPrice[1].toFixed(4)}
						</Typography>
						<Typography className={classes.cardCap}>${currentCap[1].toFixed(0)}</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} md={6} lg={6}>
					<h5>Chart</h5>
				</Grid>
			</Grid>
		</Grid>
	);
};
