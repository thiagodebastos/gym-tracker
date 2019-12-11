export type Set = [number, number];

function Exercise(props: { name: string; sets: Array<Set> }) {
    const { name, sets } = props;
    return (
        <div className="flex">
            <div className="w-64 capitalize">{name}</div>
            <div className="flex">
                {sets.map((set, i) => (
                    <div key={i} className="relative w-12 mr-4 border">
                        <span className="absolute top-0 left-0">{set[0]}</span>
                        <span className="absolute bottom-0 right-0 text-blue-600">{set[1]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export interface Props {
    entries: Array<{ name: string; sets: Array<Set> }>;
}

export default function Exercises(props: Props) {
    const { entries } = props;

    function renderEntries() {
        return entries.map(({ name, sets }) => <Exercise key={name} name={name} sets={sets} />);
    }

    const maxSets = 5;

    function getMaxSets() {
        return entries.reduce(
            (prev, curr) => (curr.sets.length > prev ? curr.sets.length : prev),
            0,
        );
    }

    function renderSetHeaders(numSets: number) {
        return Array.from(Array(numSets)).map((_, i) => (
            <div className="w-12 mr-4">Set {i + 1}</div>
        ));
    }

    return (
        <div className="bg-white mt-2 p-2">
            <div className="flex">
                <div className="w-64 font-bold">Exercise</div>
                <div className="flex">{renderSetHeaders(getMaxSets())}</div>
            </div>
            {renderEntries()}
        </div>
    );
}

Exercises.defaultProps = {
    entries: [],
};
