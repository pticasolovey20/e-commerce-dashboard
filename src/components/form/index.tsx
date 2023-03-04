import { FC, useState } from "react";
import { useStyles } from "./styles";

import { Box, Typography, Button } from "@mui/material";
import { TextFieldComponent } from "../text-field";

interface PropsTypes {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	typographyText: string;
	buttonText: string;
}

export const FormComponent: FC<PropsTypes> = ({
	handleSubmit,
	typographyText,
	buttonText,
}: PropsTypes): JSX.Element => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const classes = useStyles();

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	return (
		<Box className={classes.root}>
			<form onSubmit={handleSubmit}>
				<Typography variant="h4" className={classes.greeding}>
					{typographyText}
				</Typography>
				<TextFieldComponent
					label="Email"
					placeholder="Type your Email"
					type="text"
					value={email}
					onChange={handleEmailChange}
				/>
				<TextFieldComponent
					label="Password"
					placeholder="Type your Password"
					type="password"
					value={password}
					onChange={handlePasswordChange}
				/>
				<Button fullWidth variant="contained" type="submit">
					{buttonText}
				</Button>
			</form>
		</Box>
	);
};
