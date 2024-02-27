import { Country } from '../types/Country';

export const FlagCard = ({ data }: { data: Country }) => {
    return (
        <div className="flex flex-col my-2 p-4 items-center">
            <img
                src={data?.flags.png}
                alt={`Flag of ${data?.name.common}`}
                className="w-56 h-32 object-fit"
            />
        </div>
    );
};
