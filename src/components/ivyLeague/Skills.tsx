import { ResumeData } from '@/types/resume1';

interface SkillsProps {
    skills: ResumeData['skills'];
}

export const Skills = ({ skills }: SkillsProps) => {
    return (
        <section className="mb-8">
            <div className="relative text-center mb-4">
                <h2 className="text-xl font-bold mb-1 font-serif">Skills</h2>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};