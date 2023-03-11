import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	nameBlock: {
		marginBottom: "20px !important",
	},
	name: {
		gap: "10px",
		textAlign: "center",
	},
	symbolBlock: {
		display: "flex",
		gap: "10px",
	},
	priceBlock: {
		display: "flex",
		alignItems: "center",
	},
	beforePrice: {
		display: "flex",
		gap: "10px",
		fontSize: "24px !important",
	},
	price: {
		fontSize: "24px !important",
		fontWeight: `${600} !important`,
	},
	changePrice: {
		paddingTop: "5px",
	},
	trend: {},
});
