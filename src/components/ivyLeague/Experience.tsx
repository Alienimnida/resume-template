import { ResumeData } from '@/types/resume1';

interface ExperienceProps {
    experiences: ResumeData['experiences'];
}

export const ExperienceSection = ({ experiences }: ExperienceProps) => {
    return (
        <section className="mb-8">
            <div className="relative text-center mb-4">
                <h2 className="text-xl font-bold mb-1 font-serif">Experience</h2>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
            </div>
            {experiences.map((experience, index) => (
                <div key={index} className="mb-8 last:mb-0">
                    <div className="flex justify-between items-baseline mb-4">
                        <div>
                            <h3 className="text-gray-600 ">{experience.company}</h3>
                            <p className="text-black font-semibold">{experience.role}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-600">{experience.location}</p>
                            <p className="text-gray-600">{experience.period}</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="leading-relaxed">
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};