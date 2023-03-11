import { FC, useMemo } from "react";
import { useAppSelector } from "../../hooks/redux";
import { ICoin } from "../../types/coins";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { TrendComponent } from "../trend";

export const TopPriceComponent: FC = (): JSX.Element => {
	const coins: ICoin[] = useAppSelector((state) => state.coinsReducer.coins);

	const filteredCoins = useMemo(() => {
		return coins
			.slice()
			.sort((a, b) => b.current_price - a.current_price)
			.slice(0, 5);
	}, [coins]);

	return (
		<TableContainer component={Paper}>
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
							<TableCell align="right">{coin.current_price}$</TableCell>
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
