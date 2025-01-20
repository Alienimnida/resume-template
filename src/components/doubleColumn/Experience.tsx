import { ResumeData } from "@/types/resume1";
interface ExperienceProps {
    experience: ResumeData['experiences'];
}
export const Experience = ({ experience }: ExperienceProps) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">EXPERIENCE</h2>
            {experience.map((exp, index) => (
                <div key={index} className="mb-6">
                    <div className="flex justify-between mb-2">
                        <h3 className="font-bold">{exp.role}</h3>
                        <span className="text-gray-600">{exp.period}</span>
                    </div>
                    <div className="text-blue-500 mb-1">{exp.company}</div>
                    <div className="text-gray-600 mb-2">{exp.location}</div>
                    <ul className="list-disc pl-4 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-700">{achievement}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};