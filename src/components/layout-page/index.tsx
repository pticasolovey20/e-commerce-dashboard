import { FC } from "react";
import { useStyles } from "./styles";
import { ILayoutProps } from "../../types/props";

import { Box } from "@mui/material";

export const LayoutPageComponent: FC<ILayoutProps> = ({ children }: ILayoutProps): JSX.Element => {
	const classes = useStyles();

	return <Box className={classes.root}>{children}</Box>;
};
