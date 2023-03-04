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
			},
		},
		toolBar: {
			justifyContent: "space-between",
			padding: "25px 45px",
		},
		menuIcon: {
			marginRight: "25px !important",
		},
		greeding: {
			color: `${theme.palette.mode === "dark" ? colors.white.DEFAULT : colors.black.DEFAULT}`,
		},
		iconBlock: {
			paddingRight: "37px",
			borderRight: `1px solid ${colors.borderColor}`,
		},
		themeIcon: {
			marginRight: "45px !important",
		},
		searchBlock: {
			display: "flex",
			maxHeight: "45px",
			borderRadius: "8px",
			marginLeft: "28px",
			backgroundColor: `${colors.primary[600]}`,
		},
		searchIcon: {
			"&:hover": {
				backgroundColor: "transparent !important",
			},
		},
		searchInput: {
			padding: "12px 18px",
		},
	};
});
