import { FC } from "react";
import { useStyles } from "./styles";

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface PropsTypes {
	typographyText: string;
	route: string;
	buttonText: string;
}

export const RedirectAuthButton: FC<PropsTypes> = ({ typographyText, route, buttonText }: PropsTypes): JSX.Element => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Typography fontFamily="Montserrat">{typographyText}</Typography>
			<Link to={route}>
				<Button className={classes.button}>{buttonText}</Button>
			</Link>
		</Box>
	);
};
