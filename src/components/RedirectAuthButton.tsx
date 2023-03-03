import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface PropsParams {
	typographyText: string;
	route: string;
	buttonText: string;
}

export const RedirectAuthButton = ({ typographyText, route, buttonText }: PropsParams) => {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Typography fontFamily="Montserrat">{typographyText}</Typography>
			<Link to={route}>
				<Button
					sx={{
						fontWeight: "600",
						fontSize: "19px",
						fontFamily: "Montserrat",
					}}
				>
					{buttonText}
				</Button>
			</Link>
		</Box>
	);
};
