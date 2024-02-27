import axios from "axios";

export async function getCountries(filter?: string, fields?: string) {
    let url = ''
    if (!filter || fields?.length <=2)
        url =  'https://restcountries.com/v3.1/all'
    else {
        url = `https://restcountries.com/v3.1/${filter}/${fields}`
    }
    const response = await axios(url)
    if (response.status === 404) throw new Error('Countries not found')
    return response.data;
}

export const getRandomCountry = async () => {
    const response = await axios('https://restcountries.com/v3.1/all')
    if (response.status === 404) throw new Error('Countries not found')
    const countries = response.data
    return countries[Math.floor(Math.random() * countries.length)]
}