import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { useStyles } from "./styles";

import {
	AppBar,
	Box,
	Grid,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
	useTheme,
} from "@mui/material";
import { SvgSelector } from "../SvgSelector";
import { FlexBetween } from "../flex-between/FlexBetween";

interface PropsParams {
	isOpen: boolean;
	setIsOpen: any;
}

export const TopBar = ({ isOpen, setIsOpen }: PropsParams) => {
	const theme = useTheme();
	const colorMode: any = useContext(ColorModeContext);
	const classes = useStyles();

	return (
		<AppBar className={classes.root} position="static">
			<Toolbar className={classes.toolBar}>
				<FlexBetween>
					<IconButton className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}>
						<SvgSelector icon="menu" />
					</IconButton>
					<Typography variant="h4" className={classes.greeding}>
						Welcome Dima
					</Typography>
				</FlexBetween>
				<Box display="flex">
					<Grid className={classes.iconBlock}>
						<IconButton
							className={classes.themeIcon}
							onClick={colorMode.toggleColorMode}
						>
							{theme.palette.mode === "dark" ? (
								<SvgSelector icon="dark" />
							) : (
								<SvgSelector icon="ligth" />
							)}
						</IconButton>
						<IconButton>
							<SvgSelector icon="notification" />
						</IconButton>
					</Grid>
					<Grid className={classes.searchBlock}>
						<IconButton className={classes.searchIcon}>
							<SvgSelector icon="search" />
						</IconButton>
						<InputBase className={classes.searchInput} placeholder="Search" />
					</Grid>
				</Box>
			</Toolbar>
		</AppBar>
	);
};