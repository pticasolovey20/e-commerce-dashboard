import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			backgroundColor: `${theme.palette.mode === "light" ? colors.primary.DEFAULT : colors.primary[600]}`,
			padding: "20px 16px",
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
			marginBottom: 32,
			"& .MuiPaper-root": {
				backgroundColor: "transparent !important",
				boxShadow: "none !important",
				backgroundImage: "none !important",
			},
		},
	};
});
