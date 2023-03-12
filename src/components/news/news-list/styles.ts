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
			width: "1em",
			background: "transparent",
			borderRadius: "50px",
		},

		"&::-webkit-scrollbar-thumb": {
			borderRadius: "50px",
			position: "relative",
		},
	},
});
