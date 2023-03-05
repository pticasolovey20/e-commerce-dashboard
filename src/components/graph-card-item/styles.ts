import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
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
			paddingBottom: "35px",
		},
		cardPrice: {
			fontSize: 32,
			fontWeight: 700,
			lineHeight: "48px",
			marginBottom: "5px !important",
		},
		priceTrend: {
			display: "flex",
			width: "90px",
			alignItems: "center",
			gap: "5px",
			padding: "5px 8px",
			borderRadius: 4,
		},
		trendUp: {
			backgroundColor: "#A9FFA7",
			color: "#037400",
		},
		trendDown: {
			backgroundColor: "#FFA7A7",
			color: "#740000",
		},
	};
});
