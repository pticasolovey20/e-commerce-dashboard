import { FC } from "react";
import { useStyles } from "./styles";
import { ILayoutChartProps } from "../../types/props/ILayoutChartProps";

import { Grid } from "@mui/material";

export const LayoutChartComponent: FC<ILayoutChartProps> = ({ children }: ILayoutChartProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			{children}
		</Grid>
	);
};
