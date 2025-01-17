import { Education } from "@/types/resume2";
import { CalendarDays, MapPin } from 'lucide-react';
export const EducationSection = ({ education }: { education: Education[] }) => {
    return (
        <section className="mb-6">
            <h2 className="text-xl font-bold text-[#0C2340] border-b-2 border-[#0C2340] mb-4">EDUCATION</h2>
            {education.map((edu, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg font-bold text-[#0C2340]">{edu.degree}</h3>
                    <p className="text-[#0C2340] font-semibold">{edu.school}</p>
                    <div className="flex gap-4 text-gray-600 text-sm">
                        <CalendarDays size={16} />
                        <span>{edu.duration}</span>
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                    </div>
                </div>
            ))}
        </section>
    );
};