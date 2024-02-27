import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getRandomCountry } from '../api/countries';
import { Confetti } from '../components/Confetti';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import { FlagCard } from '../components/FlagCard';

export const GuessCountries = () => {
    const { data, error, isFetching, refetch } = useQuery({
        queryKey: ['randomCountry'],
        queryFn: getRandomCountry,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });

    const [input, setInput] = useState('');
    const [countryName, setCountryName] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);

    useEffect(() => {
        if (data) {
            setCountryName(data.name.common.toLowerCase());
            setInput('');
            setFeedbackMessage('');
            setShowFeedback(false);
        }
    }, [data]);

    const handleInputChange = (e: { target: { value: string } }) => {
        const value = e.target.value.toLowerCase();
        if (countryName.startsWith(value)) {
            setInput(value);
            setShowFeedback(false);
        } else {
            setFeedbackMessage('Wrong letter');
            setShowFeedback(true);
            setTimeout(() => {
                setShowFeedback(false);
            }, 2000);
            setInput(input);
        }
    };
    console.log({ countryName });
    const handleShowNextLetter = () => {
        const nextLetter = countryName[input.length];
        setInput(input + nextLetter);
    };

    const handleAnotherCountry = () => {
        refetch();
        setInput('');
        setCountryName('');
    };

    if (isFetching) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;

    const finished =
        input.length !== 0 && countryName.length !== 0 && input.length === countryName.length;

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <FlagCard data={data} />
                <TextField
                    placeholder="Start typing..."
                    className="px-4 py-2 border rounded shadow w-80"
                    value={input}
                    onChange={handleInputChange}
                />
                <div className="mt-4 space-x-2">
                    <Button
                        disabled={finished}
                        onClick={handleShowNextLetter}
                        label={'Show Next Letter'}
                        bgColor={'bg-blue-500'}
                    />
                    <Button
                        onClick={handleAnotherCountry}
                        label={'Another Country'}
                        bgColor={'bg-green-500 '}
                    />
                    {showFeedback && <div className="text-red-500 mt-2">{feedbackMessage}</div>}
                </div>
                <Confetti show={finished} />
            </div>
        </>
    );
};
