import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tokens } from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
	const colors = tokens(theme.palette.mode);
	return {
		root: {
			padding: "16px",
			marginBottom: "32px !important",
			border: `1px solid ${colors.borderColor}`,
			borderRadius: 12,
			backgroundColor: `${theme.palette.mode === "light" ? colors.primary.DEFAULT : colors.primary[600]}`,

			"& .MuiPaper-root": {
				boxShadow: "none !important",
				backgroundColor: "transparent !important",
				backgroundImage: "none !important",
			},
		},
	};
});
