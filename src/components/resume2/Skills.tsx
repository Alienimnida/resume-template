export const Skills = ({ skills }: { skills: string[] }) => {
    return (
        <section className="mb-6">
            <h2 className="text-xl font-bold text-[#0C2340] border-b-2 border-[#0C2340] mb-4">SKILLS</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};