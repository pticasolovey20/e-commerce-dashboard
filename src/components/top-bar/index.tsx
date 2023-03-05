import { FC } from "react";
import { useStyles } from "./styles";
import { ITopBarProps } from "../../types/props/ITopBarProps";

import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { SvgSelectorComponent } from "../svg-selector";
import { ThemeSwitcherComponent } from "../theme-switcher";
import { SearchBarComponent } from "../search-bar";

export const TopBarComponent: FC<ITopBarProps> = ({ isOpen, isNoneMobile, setIsOpen }: ITopBarProps): JSX.Element => {
	const classes = useStyles();

	return (
		<AppBar className={classes.root} position="static">
			<Toolbar className={classes.toolBar}>
				<Grid container justifyContent="space-between" alignItems="center">
					<Grid item sm={3} lg={3} className={classes.left}>
						<IconButton className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}>
							<SvgSelectorComponent icon="menu" />
						</IconButton>
						<Typography variant="h5" className={classes.greeding}>
							Welcome Dima
						</Typography>
					</Grid>

					{isNoneMobile && (
						<Grid item sm={9} lg={9} className={classes.right}>
							<ThemeSwitcherComponent />
							<Box className={classes.search}>
								<SearchBarComponent />
							</Box>
						</Grid>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
