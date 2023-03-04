import { FC } from "react";
import { Box, FormControl, TextField } from "@mui/material";

interface PropsTypes {
	label?: string;
	type?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}

export const TextFieldComponent: FC<PropsTypes> = ({
	label,
	placeholder,
	type,
	onChange,
	value,
}: PropsTypes): JSX.Element => {
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
