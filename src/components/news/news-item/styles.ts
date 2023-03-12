import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { tokens } from "../../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		item: {
			paddingBottom: "5px",
			borderBottom: `1px solid ${colors.borderColor}`,
		},

		imgBlock: { marginRight: "15px !important" },

		img: {
			height: "100%",
			width: "100%",
			borderRadius: "20px",
		},

		title: { fontSize: "16px", width: "80%" },

		buttonBlock: { alignSelf: "flex-end" },

		button: {
			color: `${theme.palette.mode === "dark" ? "#f74d4d" : colors.black.DEFAULT} !important`,
			"&:hover": {
				backgroundColor: "#f74d4d !important",
				color: `${theme.palette.mode === "dark" ? colors.white.DEFAULT : colors.black.DEFAULT} !important`,
			},
		},
	};
});
