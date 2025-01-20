import { ResumeData } from '@/types/resume1';

interface EducationItemProps {
    educations: ResumeData['education'];
}

export const EducationSection = ({ educations }: EducationItemProps) => {
    return (
        <section className="mb-8">
            <div className="relative text-center mb-4">
                <h2 className="text-xl font-bold mb-1 font-serif">Education</h2>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
            </div>
            {educations.map((education, index) => (
                <div key={index} className="mb-6 last:mb-0">
                    <div className="flex justify-between items-baseline">
                        <div>
                            <h3 className="text-2xl text-gray-600">{education.school}</h3>
                            <p className="font-semibold">{education.degree}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-600">{education.location}</p>
                            <p className="text-gray-600">{education.period}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
