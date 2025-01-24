export const Summary = ({ text }: { text: string }) => {
    return (
        <section className="px-8 py-6">
            <h2 className="text-2xl font-bold text-[#002b7f] mb-4">SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed">{text}</p>
        </section>
    );
};