import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useStyles } from "./styles";

import { Container } from "@mui/material";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

export const AuthPage: FC = (): JSX.Element => {
	const location = useLocation();
	const classes = useStyles();

	return (
		<Container maxWidth="sm" className={classes.root}>
			{location.pathname === "/login" ? <LoginPage /> : <RegisterPage />}
		</Container>
	);
};
