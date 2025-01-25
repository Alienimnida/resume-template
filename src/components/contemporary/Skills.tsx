import { Star } from 'lucide-react';
import { Skills } from '@/types/resume';

export const SkillsSection = ({ skills }: { skills: Skills[] }) => {
    return (
        <div className="flex flex-col items-start space-y-4 mb-6">
            <h2 className="text-lg font-semibold text-[#185449] flex items-center">
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <span className="bg-green-200 p-2 rounded-lg mr-2">
                    <Star size={20} color="#185449" strokeWidth={3} />
                </span>
                SKILLS
            </h2>
            <div className="w-full space-y-4">
                {skills.map((skill, index) => (
                    <div key={index} className="w-full">
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm font-medium text-gray-800">{skill.name}</h3>
                            <p className="text-sm font-medium text-gray-500">{skill.level}%</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                                className="bg-[#185449] h-2 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
