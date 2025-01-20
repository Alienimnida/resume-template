import { ResumeData } from '@/types/resume1';

interface SkillsProps {
    skills: ResumeData['skills'];
}

export const Skills = ({ skills }: SkillsProps) => {
    return (
        <section className="mb-8">
            <div className="relative mb-4">
                <h2 className="text-xl text-center font-bold mb-2 font-serif">Skills</h2>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
            </div>
            <div className="text-gray-700">
                {skills.map((skill, index) => [
                    <span key={`skill-${index}`}>{skill}</span>,
                    index < skills.length - 1 && (
                        <span key={`bullet-${index}`} className="mx-2">•</span>
                    )
                ])}
            </div>
        </section>
    );
};