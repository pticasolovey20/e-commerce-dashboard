import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => {
	return {
		root: {
			flexGrow: 1,
			padding: "32px",
		},
		areaChart: {
			marginBottom: 32,
		},
	};
});
