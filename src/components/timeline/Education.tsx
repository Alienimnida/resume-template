import { Education } from "@/types/resume";
export const EducationSection = ({ education }: { education: Education[] }) => {
    return (
        <section className="mb-6 px-8 py-6">
            <h2 className="text-2xl font-bold text-[#002b7f]">EDUCATION</h2>
            {education.map((edu, index) => (
                <div key={index} className="relative space-y-8">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-3">
                            <p className="font-bold text-[#002b7f] text-base">{edu.startDate} - {edu.endDate ? edu.endDate : "Present"}</p>
                            <p className="text-[#5c6464]">{edu.score} / {edu.scoreOutof} {edu.scoreType}</p>
                        </div>

                        <div className="col-span-1 flex flex-col items-center relative">
                            <div className="absolute top-0 h-full w-px bg-gray-300"></div>
                            <div className="w-2 h-2 bg-black rounded-full z-10"></div>
                        </div>

                        <div className="col-span-8 pb-2">
                            <h3 className="text-lg font-light text-[#002b7f]">{edu.degree}</h3>
                            <p className="text-orange-600 font-bold">{edu.institutionName}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
