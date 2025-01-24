import { Skills } from "@/types/resume";

export const SkillSection = ({ skill }: { skill: Skills[] }) => {
    return (
        <section className="mb-6 px-8 py-6">
            <h2 className="text-2xl font-bold text-[#002b7f] mb-4">SKILLS</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {skill.map((skill, index) => (
                    <li key={index} className="text-lg font-semibold border-b-2 border-gray-300">
                        {skill.name}
                    </li>
                ))}
            </ul>
        </section>
    );
};
