import { ComponentProps } from 'react';

type InputProps = {
    label: string;
    value?: string;
    className?: string;
} & ComponentProps<'input'>;

export const Radio = (props: InputProps) => {
    const style =
        props.className ||
        'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 ' +
            'dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';
    return (
        <div className="flex items-center">
            <input
                onChange={props.onChange}
                id={props.id}
                type='radio'
                value={props.value}
                name={props.name}
                className={style}
                checked={props.checked}
            />
            <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
                {props.label}
            </label>
        </div>
    );
};
