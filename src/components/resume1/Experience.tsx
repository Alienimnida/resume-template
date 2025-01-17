import { Experience } from '@/types/resume1';

interface ExperienceProps {
    experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
            EXPERIENCE
        </h2>
        {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <span className="text-gray-600">{exp.period}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-teal-400">{exp.company}</span>
                    <span className="text-gray-600">{exp.location}</span>
                </div>
                <ul className="list-disc pl-4">
                    {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-700 mb-1">{achievement}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);