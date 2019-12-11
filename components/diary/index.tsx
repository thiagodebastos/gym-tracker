import DateEntry from './ui/date-entry';
import Exercises, { Props as ExerciseProps } from './ui/exercises';

const mockData = {
    week: 1,
    day: 1,
    date: '12/12/2019',
    time: '12:23pm',
};

const mockSets: ExerciseProps['entries'] = [
    {
        name: 'barbell squat',
        sets: [
            [10, 8],
            [20, 10],
            [20, 10],
            [20, 10],
        ],
    },
    {
        name: 'barbell bench press',
        sets: [
            [20, 30],
            [40, 12],
            [60, 8],
            [70, 4],
            [70, 4],
            [70, 4],
        ],
    },
    {
        name: 'dumbbell flyes',
        sets: [
            [20, 30],
            [40, 12],
            [60, 8],
            [70, 4],
            [70, 4],
            [70, 4],
        ],
    },
    {
        name: 'skullcrushers',
        sets: [
            [20, 30],
            [40, 12],
            [60, 8],
            [70, 4],
            [70, 4],
            [70, 4],
        ],
    },
];

export default function DiaryUI() {
    return (
        <div>
            <DateEntry {...mockData} />
            <Exercises entries={mockSets} />
        </div>
    );
}
