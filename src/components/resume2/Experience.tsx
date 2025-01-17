import { Experience } from "@/types/resume2";
import { CalendarDays, MapPin } from 'lucide-react';
export const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => {
    return (
        <section className="mb-6">
            <h2 className="text-xl font-bold text-[#0C2340] border-b-2 border-[#0C2340] mb-4">EXPERIENCE</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-lg font-bold text-[#0C2340]">{exp.title}</h3>
                    <p className="text-[#0C2340] font-semibold">{exp.company}</p>
                    <div className="flex gap-4 text-gray-600 text-sm mb-2">
                        <CalendarDays size={16} />
                        <span>{exp.duration}</span>
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                    </div>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700">
                        {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};