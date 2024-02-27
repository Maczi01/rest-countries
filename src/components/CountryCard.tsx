import { Country } from '../types/Country';

export const CountryCard = ({ country }: { country: Country }) => {
    return (
        <div className="flex flex-col w-1/4 my-2 p-4 items-center">
            <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="w-24 h-16 object-cover"
            />
            <p>{country.name.common}</p>
        </div>
    );
};
