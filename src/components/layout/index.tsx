import { FC, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useStyles } from "./styles";

import { Box, useMediaQuery } from "@mui/material";
import { SideBar } from "../side-bar";
import { TopBar } from "../top-bar";

export const Layout: FC = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();
	const isNoneMobile = useMediaQuery("(min-width:600px)");
	const classes = useStyles();

	return location.pathname === "/login" || location.pathname === "/register" ? (
		<>
			<Outlet />
		</>
	) : (
		<Box display={isNoneMobile ? "flex" : "block"} className={classes.root}>
			<SideBar isNoneMobile={isNoneMobile} drawerWidth="250px" isOpen={isOpen} setIsOpen={setIsOpen} />
			<Box className={classes.mainBlock}>
				<TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
				<Outlet />
			</Box>
		</Box>
	);
};
