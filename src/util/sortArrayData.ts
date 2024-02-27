import { Country } from '../types/Country';

export const sortData = (data: Country[], sort: string) => {
    data?.sort(
        (
            a: { name: { common: string }; population: number },
            b: { name: { common: string }; population: number },
        ) => {
            if (sort === 'alphabetical') {
                return a.name.common.localeCompare(b.name.common);
            } else if (sort === 'population') {
                return b.population - a.population;
            }
            return 0;
        },
    );
    return data;
};