import { Education } from '@/types/resume1';

interface EducationProps {
    education: Education[];
}

export const EducationSection = ({ education }: EducationProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
            EDUCATION
        </h2>
        {education.map((edu, index) => (
            <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                    <h3 className="font-semibold text-lg">{edu.degree}</h3>
                    <span className="text-gray-600">{edu.period}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-teal-600">{edu.school}</span>
                    <span className="text-gray-600">{edu.location}</span>
                </div>
            </div>
        ))}
    </div>
);