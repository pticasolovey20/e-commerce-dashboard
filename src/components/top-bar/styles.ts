import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			background: `${colors.primary.DEFAULT} !important`,
			borderBottom: `1px solid ${colors.borderColor}`,
			boxShadow: "none !important",
			"& .MuiSvgIcon-root": {
				color: theme.palette.secondary.main,
				height: "30px",
				width: "30px",

				"&:hover": {
					color: `${theme.palette.mode === "dark" ? colors.white.DEFAULT : colors.black.DEFAULT}`,
				},
			},
		},
		toolBar: {
			justifyContent: "space-between",
			padding: "25px 45px",
		},
		left: {
			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		menuIcon: {
			marginRight: "25px !important",
		},
		greeding: {
			color: `${theme.palette.mode === "dark" ? colors.white.DEFAULT : colors.black.DEFAULT}`,
		},
		right: {
			display: "flex",
			justifyContent: "flex-end",
		},
		search: {
			width: "300px",
			paddingRight: "10px",
		},
	};
});
