import { FC } from "react";
import { ISelectProps } from "../../types/props";

import { Box, FormControl, MenuItem, Select } from "@mui/material";

export const SelectComponent: FC<ISelectProps> = ({ options, value, onChange }: ISelectProps): JSX.Element => {
	return (
		<Box mb={3} width="100%" textAlign="start">
			<FormControl size="small" fullWidth>
				<Select value={value} onChange={onChange}>
					{options.map(({ id, name }) => (
						<MenuItem value={id} key={id}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};
