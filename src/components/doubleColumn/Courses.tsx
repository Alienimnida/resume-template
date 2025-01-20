import { ResumeData } from "@/types/resume1";
interface CoursesProps {
    certifications: ResumeData['Certification'];
}
export const Courses = ({ certifications }: CoursesProps) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">COURSES</h2>
            {certifications.map((cert, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-blue-500 font-medium">{cert.title}</h3>
                    <p className="text-gray-700 text-sm">{cert.description}</p>
                </div>
            ))}
        </section>
    );
};