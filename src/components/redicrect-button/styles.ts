import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		fontWeight: "600",
		fontSize: "19px",
		fontFamily: "Montserrat",
		"&:hover": {
			backgroundColor: "transparent !important",
		},
	},
});
