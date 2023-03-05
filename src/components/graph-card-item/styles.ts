import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
	return {
		coinName: {
			fontSize: 25,
			fontWeight: 600,
			lineHeight: "30px",
			textTransform: "capitalize",
			textAlign: "right",
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
			textAlign: "right",
		},
	};
});
