import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
	return {
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
