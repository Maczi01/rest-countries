import { Country } from '../types/Country';

type CountryCardProps = {
    country: Country;
};

export const CountryCard = ({ country }: CountryCardProps) => {
    const firstCurrencyKey = country?.currencies ? Object.keys(country.currencies)[0] : null;
    const firstCurrency = country?.currencies && firstCurrencyKey ? country.currencies[firstCurrencyKey] : null;

    return (
        <div className="flex flex-col w-1/4 my-2 p-4 items-center">
            <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="w-36 h-20 object-fit"
            />
            <p className="text-lg font-bold">{country.name.common}</p>
            <p>{country.capital}</p>
            {firstCurrency && (
                <p>{firstCurrency.name} ({firstCurrency.symbol})</p>
            )}
        </div>
    );
};
