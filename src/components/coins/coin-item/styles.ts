import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		item: {
			padding: "15px",
			minWidth: "230px",
			height: "230px",
			borderRight: `1px solid ${colors.borderColor}`,

			"&:last-child": {
				borderRight: "none",
			},
		},

		top: {
			display: "flex",
			flexDirection: "column",
		},

		imgBlock: {
			display: "flex !important",
			justifyContent: "center",
		},

		img: {
			height: "120px",
			width: "120px",
		},

		bottom: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: "10px !important",
		},

		priceBlock: {
			display: "flex",
			gap: "5px",
		},

		price: {
			fontWeight: "600 !important",
			color: "#35d438",
		},
	};
});
