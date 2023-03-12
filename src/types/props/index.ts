import { SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";
import { ICoin } from "../coins";
import { INewsData } from "../news";

export interface IFormProps {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
	typographyText: string;
	buttonText: string;
}

export interface ILayoutProps {
	children?: ReactNode;
	height?: number;
}

export interface ITemplateProps {
	children?: ReactNode;
	lg?: number;
	sm?: number;
	xs?: number;
	height?: number | string;
}

export interface IRedirectButtonProps {
	typographyText: string;
	route: string;
	buttonText: string;
}

export interface ISideBarProps {
	isNoneMobile: boolean;
	drawerWidth: string;
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}

export interface ISvgSelectorProps {
	icon: string;
}

export interface ITextFieldProps {
	label?: string;
	type?: string;
	placeholder?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}

export interface ITopBarProps {
	isOpen: boolean;
	isNoneMobile: boolean;
	setIsOpen: (value: boolean) => void;
}

export interface ITrendProps {
	value: any;
	symbol: string;
}

export interface INewsItem {
	item: INewsData;
}

interface IOptions {
	name: string;
	id: string;
}

export interface ISelectProps {
	options: ICoin[] | IOptions[];
	value: string;
	onChange: (event: SelectChangeEvent<string>) => void;
}

export interface ICoinItem {
	coin: ICoin;
}
