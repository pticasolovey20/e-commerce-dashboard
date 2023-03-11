import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);

	return {
		root: {
			display: "flex",
			width: "100%",
		},

		input: {
			width: "100%",

			borderRadius: "5px",
			border: `1px solid ${colors.borderColor} !important`,

			"& .MuiOutlinedInput-root": {
				borderTop: `1px solid ${colors.borderColor} !important`,
				lineHeight: "50px",
			},

			"& .MuiInputLabel-root": {
				color: `${theme.palette.mode === "dark" ? colors.white.DEFAULT : colors.black.DEFAULT}`,
			},
		},
	};
});
