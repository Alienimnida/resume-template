import { ResumeData } from "@/types/resume1";
interface SummaryProps {
    summary: ResumeData['summary'];
}

export const Summary = ({ summary }: SummaryProps) => {
    return (
        <section className="mb-8">
            <div className="relative text-center mb-4">
                <h2 className="text-xl font-bold mb-1 font-serif">Summary</h2>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
            </div>
            <p className="text-gray-700 text-sm leading-6">{summary}</p>
        </section>
    );
};
