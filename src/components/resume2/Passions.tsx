import { Passion } from "@/types/resume2";
export const Passions = ({ passions }: { passions: Passion[] }) => {
    return (
        <section className="mb-6">
            <h2 className="text-xl font-bold text-[#0C2340] border-b-2 border-[#0C2340] mb-4">VOLUNTEER EXPERIENCE</h2>
            <div className="space-y-4">
                {passions.map((passion, index) => (
                    <div key={index} className="flex gap-3">
                        <div className="text-[#0C2340]">
                            <passion.icon size={24} strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0C2340]">{passion.title}</h3>
                            <p className="text-gray-700">{passion.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};