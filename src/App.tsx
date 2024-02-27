import { useState } from 'react';

import './App.css';
import { ExploreCountries } from './views/ExploreCountries';
import { GuessCountries } from './views/GuessCountry';
import { Radio } from './components/Radio';
import { Title } from './components/Title';

function App() {
    const [view, setView] = useState<'explore' | 'guess'>('guess');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value as 'explore' | 'guess'; // Type assertion here
        setView(newValue);
    };

    return (
        <>
            <div className="flex flex-row w-full justify-around">
                <Radio
                    onChange={onChange}
                    id="default-radio-1"
                    value="explore"
                    name="default-radio"
                    checked={view === 'explore'}
                    label="Explore"
                />
                <Radio
                    onChange={onChange}
                    id="default-radio-2"
                    value="guess"
                    name="default-radio"
                    checked={view === 'guess'}
                    label="Guess Country"
                />
            </div>
            <Title />
            {view === 'explore' ? <ExploreCountries /> : <GuessCountries />}
        </>
    );
}

export default App;
