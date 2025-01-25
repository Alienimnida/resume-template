import { GraduationCap } from 'lucide-react';
import { Education } from '@/types/resume';

export const EducationSection = ({ educations }: { educations: Education[] }) => {
    return (
        <div className="flex flex-col items-start space-y-4 mb-6">
            <h2 className="text-lg font-semibold text-[#185449] flex items-center">
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <span className="bg-green-200 p-2 rounded-lg mr-2">
                    <GraduationCap size={20} color="#185449" strokeWidth={3} />
                </span>
                EDUCATION
            </h2>
            {educations.map((edu, index) => (
                <div className="w-full" key={index}>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-md font-semibold text-gray-800">{edu.institutionName}</h3>
                            <p className="text-sm text-gray-600">{edu.degree}</p>
                        </div>

                        <div className="text-right">
                            <p className="text-sm text-gray-500">{edu.score} / {edu.scoreOutof} {edu.scoreType}</p>
                            <p className="text-sm text-gray-500">{edu.startDate} - {edu.endDate ? edu.endDate : "Present"}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
