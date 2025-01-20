import { ResumeData } from "@/types/resume1";
interface EducationProps {
    education: ResumeData['education'];
}
export const Education = ({ education }: EducationProps) => {
    return (
        <section>
            <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">EDUCATION</h2>
            {education.map((edu, index) => (
                <div key={index} className="mb-4">
                    <h3 className="font-bold">{edu.degree}</h3>
                    <div className="text-blue-500">{edu.school}</div>
                    <div className="text-gray-600">{edu.period} • {edu.location}</div>
                </div>
            ))}
        </section>
    );
};