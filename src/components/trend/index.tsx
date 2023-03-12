import { FC } from "react";
import { useStyles } from "./styles";
import { ITrendProps } from "../../types/props";

import { Box, Typography } from "@mui/material";
import TrendUp from "../../assets/images/graph-card-item/trend-up.svg";
import TrendDown from "../../assets/images/graph-card-item/trend-down.svg";

export const TrendComponent: FC<ITrendProps> = ({ value, symbol }: ITrendProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Box className={value >= 0 ? `${classes.root} ${classes.trendUp}` : `${classes.root} ${classes.trendDown}`}>
			{value >= 0 ? (
				<img src={TrendUp} alt="trend" className={classes.img} />
			) : (
				<img src={TrendDown} alt="trend" className={classes.img} />
			)}
			<Typography>{`${value}${symbol}`}</Typography>
		</Box>
	);
};
