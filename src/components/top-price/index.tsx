import { FC } from "react";
import { ITopPrice } from "../../types/coins";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Trend } from "../trend";

export const TopPrice: FC<ITopPrice> = ({ coins }: ITopPrice): JSX.Element => {
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
					{coins.map((coin) => (
						<TableRow key={coin.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component="th" scope="row">
								{coin.name}
							</TableCell>
							<TableCell align="right">{coin.current_price}$</TableCell>
							<TableCell>
								<Trend value={coin.price_change_percentage_24h.toFixed(2)} symbol={"%"} />
							</TableCell>
							<TableCell>
								<Trend value={coin.price_change_24h} symbol={"$"} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
