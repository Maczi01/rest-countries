import { Filter } from '../types/Filter';
import {ChangeEvent, ComponentProps} from 'react';

type DropdownProps = {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
} & Omit<ComponentProps<'select'>, 'value' | 'onChange'>;

export const Dropdown = (props: DropdownProps) => {
    return (
        <select
            className="ml-2 px-4 py-2 border rounded shadow"
            onChange={props.onChange}
            value={props.value}
        >
            {props.options.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
            {/*<option value="currency">Currency</option>*/}
            {/*<option value="lang">Language</option>*/}
            {/*<option value="capital">Capital</option>*/}
            {/*<option value="country">Country</option>*/}
        </select>
    );
};
