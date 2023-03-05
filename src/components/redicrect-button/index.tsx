import { FC } from "react";
import { useStyles } from "./styles";
import { IRedirectButtonProps } from "../../types/props/IRedirectButtonProps";

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const RedirectAuthButton: FC<IRedirectButtonProps> = ({
	typographyText,
	route,
	buttonText,
}: IRedirectButtonProps): JSX.Element => {
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
