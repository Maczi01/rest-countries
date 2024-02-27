import { Country } from '../types/Country';

export const sortData = (data: Country[], sort: string) => {
    data?.sort(
        (
            a: { name: { common: string }; population: number },
            b: { name: { common: any }; population: number },
        ) => {
            if (sort === 'alpha') {
                return a.name.common.localeCompare(b.name.common);
            } else if (sort === 'pop') {
                return b.population - a.population; // Adjusted for descending order, assuming higher population should come first
            }
            return 0;
        },
    );
    return data;
};