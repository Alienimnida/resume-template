import { SkillsProps } from "@/types/resume1";

export const Skills = ({ skills }: SkillsProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
            SKILLS
        </h2>
        <div className="space-y-4">
            {skills.map((skillGroup, index) => (
                <div key={index} className="flex flex-wrap gap-2">
                    {skillGroup.map((skill, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </div>
);
