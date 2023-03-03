import React, { useState } from "react";

import { Box, Typography, Button } from "@mui/material";
import { TextFieldComponent } from "./TextFieldComponent";

interface PropsParam {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	typographyText: string;
	buttonText: string;
}

export const FormComponent = ({ handleSubmit, typographyText, buttonText }: PropsParam) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	return (
		<Box
			sx={{
				padding: "40px",
				borderRadius: "10px",
				boxShadow: "5px 5px 10px #ccc",
			}}
		>
			<form onSubmit={handleSubmit}>
				<Typography variant="h4" fontFamily="Montserrat" align="center" mb={1}>
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
				<Button
					fullWidth
					variant="contained"
					type="submit"
					sx={{ fontFamily: "Montserrat" }}
				>
					{buttonText}
				</Button>
			</form>
		</Box>
	);
};
