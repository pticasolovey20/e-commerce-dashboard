import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { ICoin } from "../../types/coins";

import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface ISelectProps {
	value: string;
	onChange: (event: SelectChangeEvent<string>) => void;
}

export const SelectComponent: FC<ISelectProps> = ({ value, onChange }: ISelectProps): JSX.Element => {
	const coins: ICoin[] = useAppSelector((state) => state.coinsReducer.coins);

	return (
		<Box mb={3} width="100%" textAlign="start">
			<FormControl size="small" fullWidth>
				<Select value={value} onChange={onChange}>
					{coins.map(({ id, name }) => (
						<MenuItem value={id} key={id}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};
