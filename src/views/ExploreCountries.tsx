import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';

import { getCountries } from '../api/countries';
import { useDebounce } from '../hooks/useDebounce';
import { Country } from '../types/Country';
import { Filter, Sort } from '../types/Filter';
import { CountryCard } from '../components/CountryCard';
import { sortData } from '../util/sortArrayData';
import { TextField } from '../components/TextField';
import { Dropdown } from '../components/Dropdown';
import { filterOptions, sortOptions } from '../constants/constants';

export const ExploreCountries = () => {
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState<Filter>('');
    const [sort, setSort] = useState<Sort>('alphabetical');
    const debouncedInput = useDebounce(input, 800);
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData', filter, debouncedInput],
        queryFn: () => getCountries(filter, debouncedInput),
    });

    const onChangeInputText = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

    const onChangeFilterOption = (e: ChangeEvent<HTMLSelectElement>) =>
        setFilter(e.target.value as Filter);

    const onChangeSortOption = (e: ChangeEvent<HTMLSelectElement>) =>
        setSort(e.target.value as Sort);

    const sortedData = sortData(data, sort);

    if (isPending) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <>
            <div className="my-4">
                <TextField
                    type="text"
                    name="filter"
                    placeholder="Filter..."
                    className="px-4 py-2 border rounded shadow"
                    value={input}
                    onChange={onChangeInputText}
                />
                <Dropdown value={filter} options={filterOptions} onChange={onChangeFilterOption} />
                <Dropdown value={sort} options={sortOptions} onChange={onChangeSortOption} />
            </div>
            <div className="flex flex-row flex-wrap justify-center">
                {sortedData?.map((country: Country) => (
                    <CountryCard key={country.cca3} country={country} />
                ))}
            </div>
        </>
    );
};
