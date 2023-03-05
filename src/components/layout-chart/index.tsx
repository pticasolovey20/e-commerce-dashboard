import { FC, ReactNode } from "react";
import { useStyles } from "./styles";

import { Grid } from "@mui/material";

interface ILayoutChartProps {
	children: ReactNode;
}

export const LayoutChart: FC<ILayoutChartProps> = ({ children }: ILayoutChartProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Grid container className={classes.root}>
			{children}
		</Grid>
	);
};
