export const Summary = ({ text }: { text: string }) => {
    return (
        <section className="mb-6">
            <h2 className="text-xl font-bold text-[#0C2340] border-b-2 border-[#0C2340] mb-4">SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed">{text}</p>
        </section>
    );
};