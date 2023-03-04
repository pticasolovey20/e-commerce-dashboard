import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			flexGrow: 1,
			padding: "32px",
		},
		graphItem: {
			backgroundColor: `${theme.palette.mode === "light" ? colors.primary.DEFAULT : colors.primary[600]}`,
			padding: "20px 16px",
			minHeight: 185,
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
		},
		coinName: {
			fontSize: 25,
			fontWeight: 600,
			lineHeight: "30px",
			textTransform: "capitalize",
		},
		itemDetails: {
			display: "flex",
			height: "100%",
			flexDirection: "column",
			justifyContent: "flex-end",
			paddingBottom: "20px",
		},
		cardPrice: {
			fontSize: 32,
			fontWeight: 700,
			lineHeight: "48px",
		},
		cardCap: {
			color: `${colors.secondary.DEFAULT}`,
			fontSize: 18,
			fontWeight: 400,
			lineHeight: "21px",
		},
	};
});
