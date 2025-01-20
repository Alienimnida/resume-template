import { ResumeData } from "@/types/resume1";
interface SkillsProps {
    skills: ResumeData['skills'];
}
export const Skills = ({ skills }: SkillsProps) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">SKILLS</h2>
            <div className="flex flex-wrap gap-2">
                {skills.flat().map((skill, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};