import { FC } from "react";
import { ITextFieldProps } from "../../types/props";

import { Box, FormControl, TextField } from "@mui/material";

export const TextFieldComponent: FC<ITextFieldProps> = ({
	label,
	placeholder,
	type,
	onChange,
	value,
}: ITextFieldProps): JSX.Element => {
	return (
		<Box mb={2} width="100%">
			<FormControl fullWidth size="small">
				<TextField
					label={label}
					type={type}
					size="small"
					variant="outlined"
					onChange={onChange}
					value={value}
					placeholder={placeholder}
				/>
			</FormControl>
		</Box>
	);
};
