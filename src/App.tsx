import { Routes, Route } from "react-router-dom";

import { PrivateRoute } from "./utils/router/privateRoute";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { Container, Box } from "@mui/material";

export const App = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Container sx={{ flex: 1 }}>
				<Routes>
					<Route element={<PrivateRoute />}>
						<Route path="/" element={<HomePage />} />
					</Route>

					<Route path="/login" element={<AuthPage />} />
					<Route path="/register" element={<AuthPage />} />
				</Routes>
			</Container>
		</Box>
	);
};
