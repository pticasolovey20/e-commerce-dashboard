import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	slider: {
		display: "flex",
		flexWrap: "nowrap",
		width: "1300px",
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
