import { FC, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useStyles } from "./styles";

import { Box, useMediaQuery } from "@mui/material";
import { SideBarComponent } from "../side-bar";
import { TopBarComponent } from "../top-bar";

export const LayoutComponent: FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const isNoneMobile = useMediaQuery("(min-width:760px)");
	const classes = useStyles();

	return location.pathname === "/login" || location.pathname === "/register" ? (
		<>
			<Outlet />
		</>
	) : (
		<Box display={isNoneMobile ? "flex" : "block"} className={classes.root}>
			<SideBarComponent isNoneMobile={isNoneMobile} drawerWidth="250px" isOpen={isOpen} setIsOpen={setIsOpen} />
			<Box className={classes.mainBlock}>
				<TopBarComponent isOpen={isOpen} setIsOpen={setIsOpen} isNoneMobile={isNoneMobile} />
				<Outlet />
			</Box>
		</Box>
	);
};
