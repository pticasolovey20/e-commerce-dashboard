import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		width: "90px",
		alignItems: "center",
		justifyContent: "center",
		gap: "5px",
		padding: "5px 8px",
		borderRadius: 4,
		margin: "0px auto",
		marginRight: "0px",
	},
	trendUp: {
		backgroundColor: "#A9FFA7",
		color: "#037400",
	},
	trendDown: {
		backgroundColor: "#FFA7A7",
		color: "#740000",
	},
});
