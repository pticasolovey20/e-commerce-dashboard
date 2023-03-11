import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStyles } from "./styles";
import { navigateMenu } from "../../moks/navigate";
import { ISideBarProps } from "../../types/props";

import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme,
} from "@mui/material";
import { FlexBetweenComponent } from "../flex-between";
import { SvgSelectorComponent } from "../svg-selector";
import Logo from "../../assets/images/sidebar/logo.svg";
import { ThemeSwitcherComponent } from "../theme-switcher";
import { SearchBarComponent } from "../search-bar";

export const SideBarComponent: FC<ISideBarProps> = ({
	isNoneMobile,
	drawerWidth,
	isOpen,
	setIsOpen,
}: ISideBarProps): JSX.Element => {
	const [active, setActive] = useState("");
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const theme = useTheme();
	const classes = useStyles();

	useEffect(() => {
		setActive(pathname);
	}, [pathname]);

	return (
		<Box component="nav">
			{isOpen && (
				<Drawer
					open={isOpen}
					onClose={() => setIsOpen(false)}
					variant="persistent"
					anchor="left"
					sx={{
						width: drawerWidth,
						"& .MuiDrawer-paper": {
							color: theme.palette.secondary.main,
							backgroundColor: theme.palette.primary.main,
							width: drawerWidth,
						},
					}}
				>
					<Box className={classes.navBlock}>
						<Box>
							<FlexBetweenComponent>
								<Box className={classes.brand}>
									<img src={Logo} alt="logo" />
									<Typography variant="h1" className={classes.brandTitle}>
										Demo
									</Typography>
								</Box>
								{!isNoneMobile && (
									<IconButton onClick={() => setIsOpen(!isOpen)}>
										<SvgSelectorComponent icon="chevron-left" />
									</IconButton>
								)}
							</FlexBetweenComponent>
						</Box>
						{/* {!isNoneMobile && (
							<ListItem>
								<SearchBarComponent />
							</ListItem>
						)} */}
						<List className={classes.navList}>
							{navigateMenu.map((item) => (
								<ListItem key={item.id}>
									<ListItemButton
										className={
											active === item.path
												? `${classes.navItem} ${classes.active}`
												: classes.navItem
										}
										onClick={() => navigate(item.path)}
									>
										<ListItemIcon>
											<SvgSelectorComponent icon={item.icon} />
										</ListItemIcon>
										<ListItemText>
											<Typography variant="body1">{item.name}</Typography>
										</ListItemText>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
					<Box width="100%">
						<List>
							{!isNoneMobile && (
								<ListItem>
									<Box padding="5px">
										<ThemeSwitcherComponent />
									</Box>
								</ListItem>
							)}
							<ListItem>
								<ListItemButton className={classes.navItem}>
									<ListItemIcon>
										<SvgSelectorComponent icon="logout" />
									</ListItemIcon>
									<ListItemText>
										<Typography>Log out</Typography>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Drawer>
			)}
		</Box>
	);
};
