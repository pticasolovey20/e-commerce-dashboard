export interface ITextFieldProps {
	label?: string;
	type?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}
