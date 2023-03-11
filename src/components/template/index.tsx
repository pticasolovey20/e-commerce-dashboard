import { FC } from "react";
import { useStyles } from "./styles";
import { ITemplateProps } from "../../types/props";

import { Grid } from "@mui/material";

export const TemplateComponent: FC<ITemplateProps> = ({
	children,
	lg,
	sm,
	xs,
	height,
}: ITemplateProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Grid item lg={lg} sm={sm} xs={xs} className={classes.root} sx={{ height: height }}>
			{children}
		</Grid>
	);
};
