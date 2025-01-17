import { Passion } from '@/types/resume1';

interface PassionsProps {
    passions: Passion[];
}

export const Passions = ({ passions }: PassionsProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-white pb-2">
            PASSIONS
        </h2>
        {passions.map((passion, index) => (
            <div key={index} className="mb-4">
                <h3 className="font-semibold mb-2">{passion.title}</h3>
                <p className="text-sm">{passion.description}</p>
            </div>
        ))}
    </div>
);