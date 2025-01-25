import { ResumeData } from "@/types/resume1";
interface SkillsProps {
    skills: ResumeData['skills'];
}

export const Skills = ({ skills }: SkillsProps) => (
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
            Skills
        </h2>
        <div className="space-y-4">
            {Array.isArray(skills[0]) ? (
                (skills as string[][]).map((skillGroup, index) => (
                    <div
                        key={index}
                        className="flex flex-wrap gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                    >
                        {skillGroup.map((skill, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 text-black font-medium rounded-full text-sm shadow-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                ))
            ) : (
                (skills as string[]).map((skill, i) => (
                    <span
                        key={i}
                        className="inline-block px-4 py-2 text-black font-medium rounded-full text-sm shadow-sm m-1"
                    >
                        {skill}
                    </span>
                ))
            )}
        </div>
    </div>
);
