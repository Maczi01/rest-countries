import { ComponentProps } from 'react';

type ButtonProps = {
    label: string;
    bgColor?: string;
} & ComponentProps<'button'>;

export const Button = ({ label, bgColor, ...rest }: ButtonProps) => {
    return (
        <button
            className={`{px-4 py-2 ${bgColor} w-44 text-white rounded transition hover:transform hover:scale-105 duration-300 disabled:bg-slate-400}`}
            {...rest}
        >
            {label}
        </button>
    );
};
