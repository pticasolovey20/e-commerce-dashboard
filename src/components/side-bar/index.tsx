import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStyles } from "./styles";
import { navigateMenu } from "../../moks/navigate";
import { ISideBarProps } from "../../types/ISideBarProps";

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
import { FlexBetween } from "../flex-between";
import { SvgSelector } from "../svg-selector";
import Logo from "../../assets/images/sidebar/logo.svg";

export const SideBar: FC<ISideBarProps> = ({
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
							<FlexBetween>
								<Box className={classes.brand}>
									<img src={Logo} alt="logo" />
									<Typography variant="h1" className={classes.brandTitle}>
										Demo
									</Typography>
								</Box>
								{!isNoneMobile && (
									<IconButton onClick={() => setIsOpen(!isOpen)}>
										<SvgSelector icon="chevron-left" />
									</IconButton>
								)}
							</FlexBetween>
						</Box>
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
											<SvgSelector icon={item.icon} />
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
							<ListItem>
								<ListItemButton className={classes.navItem}>
									<ListItemIcon>
										<SvgSelector icon="logout" />
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
