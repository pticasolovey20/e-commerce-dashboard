import { FC, useContext } from "react";
import { useStyles } from "./styles";
import { ColorModeContext } from "../../theme";

import { Grid, IconButton, useTheme } from "@mui/material";
import { SvgSelectorComponent } from "../svg-selector";

export const ThemeSwitcherComponent: FC = (): JSX.Element => {
	const theme = useTheme();
	const classes = useStyles();
	const colorMode: any = useContext(ColorModeContext);

	return (
		<Grid className={classes.root}>
			<IconButton className={classes.icon} onClick={colorMode.toggleColorMode}>
				{theme.palette.mode === "dark" ? (
					<SvgSelectorComponent icon="dark" />
				) : (
					<SvgSelectorComponent icon="ligth" />
				)}
			</IconButton>
			<IconButton>
				<SvgSelectorComponent icon="notification" />
			</IconButton>
		</Grid>
	);
};
