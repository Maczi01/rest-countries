import axios from 'axios';

export async function getCountries(filter?: string, input?: string) {
    let url = 'https://restcountries.com/v3.1/all';

    if (input && input.length >= 3) {
        if (!filter) {
            url = `https://restcountries.com/v3.1/name/${input}`;
        } else {
            url = `https://restcountries.com/v3.1/${filter}/${input}`;
        }
    }
    const response = await axios(url);
    if (response.status === 404) throw new Error('Countries not found');
    return response.data;
}

export const getRandomCountry = async () => {
    const response = await axios('https://restcountries.com/v3.1/all');
    if (response.status === 404) throw new Error('Countries not found');
    const countries = response.data;
    return countries[Math.floor(Math.random() * countries.length)];
};
