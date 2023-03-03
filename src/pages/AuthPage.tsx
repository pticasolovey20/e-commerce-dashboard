import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";

export const AuthPage = () => {
	const location = useLocation();

	return (
		<Container
			maxWidth="sm"
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			{location.pathname === "/login" ? <LoginPage /> : <RegisterPage />}
		</Container>
	);
};
