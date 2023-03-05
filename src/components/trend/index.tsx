import { FC } from "react";
import { useStyles } from "./styles";

import { Box, Typography } from "@mui/material";
import TrendUp from "../../assets/images/graph-card-item/trend-up.svg";
import TrendDown from "../../assets/images/graph-card-item/trend-down.svg";

interface PropsTypes {
	value: any;
	symbol: string;
}

export const Trend: FC<PropsTypes> = ({ value, symbol }: PropsTypes): JSX.Element => {
	const classes = useStyles();

	return (
		<Box className={value > 0 ? `${classes.root} ${classes.trendUp}` : `${classes.root} ${classes.trendDown}`}>
			{value > 0 ? <img src={TrendUp} alt="trend" /> : <img src={TrendDown} alt="trend" />}
			<Typography>{`${Number(value).toFixed(2)}${symbol}`}</Typography>
		</Box>
	);
};