import { Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LayoutComponent } from "./components/layout";

import { HomePage } from "./pages/HomePage";
import { WatchListPage } from "./pages/WatchListPage";
import { NewsPage } from "./pages/NewsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { SingleCoinPage } from "./pages/SingleCoinPage";
import { PrivateRouteComponent } from "./components/private-route";
import { AuthPage } from "./pages/AuthPage";

export const App = () => {
	const { theme, colorMode } = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100vh",
					}}
				>
					<Box sx={{ flex: 1 }}>
						<Routes>
							<Route element={<LayoutComponent />}>
								<Route element={<PrivateRouteComponent />}>
									<Route path="/" element={<HomePage />} />
									<Route path="/watchList" element={<WatchListPage />} />
									<Route path="/news" element={<NewsPage />} />
									<Route path="/settings" element={<SettingsPage />} />
									<Route path="/single/:id" element={<SingleCoinPage />} />
								</Route>
								<Route path="/login" element={<AuthPage />} />
								<Route path="/register" element={<AuthPage />} />
							</Route>
						</Routes>
					</Box>
				</Box>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};
