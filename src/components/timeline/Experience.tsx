import { Experience } from "@/types/resume";

export const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => {
    return (
        <section className="mb-6 px-8 py-6">
            <h2 className="text-2xl font-bold text-[#002b7f]">EXPERIENCE</h2>
            {experiences.map((exp, index) => (
                <div key={index} className="relative space-y-8">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3">
                            <p className="font-bold text-[#002b7f] text-base">{exp.startDate} - {exp.endDate ? exp.endDate : "Present"}</p>
                            <p className="text-[#5c6464]">{exp.location}</p>
                        </div>

                        <div className="col-span-1 flex flex-col items-center relative">
                            <div className="absolute top-0 h-full w-px bg-gray-300"></div>
                            <div className="w-2 h-2 bg-black rounded-full z-10"></div>
                        </div>

                        <div className="col-span-8 space-y-2">
                            <h3 className="text-lg font-light text-[#002b7f]">{exp.position}</h3>
                            <p className="text-orange-600 font-bold">{exp.companyName}</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                {exp.bullets.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
