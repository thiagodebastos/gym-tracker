interface Props {
    week: number;
    day: number;
    date: string;
    time: string;
}

function renderHeaderElement(title: string, value: string | number) {
    return (
        <div className="text-xl uppercase font-bold" key={title}>
            <span className="mr-2">{title}</span>
            <span className="text-gray-600 italic">{value}</span>
        </div>
    );
}

export default function DateEntry(props: Props) {
    const { date, day, time, week } = props;

    return (
        <div className="flex justify-between p-2 bg-white rounded-t-lg">
            {[
                { title: 'week', value: week },
                { title: 'day', value: day },
                { title: 'date', value: date },
                { title: 'time', value: time },
            ].map(({ title, value }) => renderHeaderElement(title, value))}
        </div>
    );
}
