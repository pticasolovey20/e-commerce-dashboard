import { FC } from "react";
import { useStyles } from "./styles";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";

import { Autocomplete, Grid, TextField } from "@mui/material";

export const SearchBarComponent: FC = (): JSX.Element => {
	const navigate = useNavigate();
	const classes = useStyles();
	const coins = useAppSelector((state) => state.coinsReducer.coins);

	return (
		<Grid className={classes.root}>
			<Autocomplete
				freeSolo
				disablePortal
				clearIcon={null}
				id="combo-box-demo"
				options={coins.map((option: { name: string }) => option.name)}
				className={classes.input}
				renderInput={(params) => <TextField {...params} label="Search..." />}
				onChange={(event: any, value: string | null) => value && navigate(`single/${value}`)}
			/>
		</Grid>
	);
};
