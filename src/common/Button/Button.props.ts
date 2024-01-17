import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	variable: 'primary' | 'outline';
	children?: ReactNode;
	arrow?: 'left' | 'right' | 'bottom';
	path?: string;
}
