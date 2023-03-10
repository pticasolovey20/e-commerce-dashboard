import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		height: "790px",
		gap: "20px",
		overflow: "scroll",
		overflowX: "hidden",

		"&::-webkit-scrollbar": {
			width: "0em",
			background: "transparent",
			borderRadius: "50px",
		},
	},
});
