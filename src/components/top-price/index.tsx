import { FC, useMemo, useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { ICoin } from "../../types/coins";
import { useStyles } from "./styles";
import { options } from "../../moks/options";

import {
	Box,
	Paper,
	SelectChangeEvent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { TrendComponent } from "../trend";
import { SelectComponent } from "../select";

export const TopPriceComponent: FC = (): JSX.Element => {
	const [value, setValue] = useState("");

	const classes = useStyles();
	const coins: ICoin[] = useAppSelector((state) => state.coinsReducer.coins);

	const filteredCoins = useMemo(() => {
		if (value === "lowest") {
			return coins
				.slice()
				.sort((a, b) => a.current_price - b.current_price)
				.slice(0, 5);
		} else {
			return coins
				.slice()
				.sort((a, b) => b.current_price - a.current_price)
				.slice(0, 5);
		}
	}, [coins, value]);

	const handleChange = (event: SelectChangeEvent<string>) => {
		setValue(event.target.value);
	};

	return (
		<TableContainer component={Paper} className={classes.root}>
			<Box className={classes.inputBox}>
				<SelectComponent options={options} value={value} onChange={handleChange} />
			</Box>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="right">Price</TableCell>
						<TableCell align="right">Changes (%)</TableCell>
						<TableCell align="right">Changes ($)</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{filteredCoins.map((coin) => (
						<TableRow key={coin.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" scope="row">
								{coin.name}
							</TableCell>
							<TableCell align="right">
								{coin.current_price.toFixed(coin.current_price > 1000 ? 2 : 6)}$
							</TableCell>
							<TableCell>
								<TrendComponent value={coin.price_change_percentage_24h.toFixed(2)} symbol={"%"} />
							</TableCell>
							<TableCell>
								<TrendComponent value={coin.price_change_24h.toFixed(0)} symbol={"$"} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
