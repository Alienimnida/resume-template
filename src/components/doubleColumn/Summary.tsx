import { ResumeData } from "@/types/resume1";
interface SummaryProps {
    summary: ResumeData['summary'];
}
export const Summary = ({ summary }: SummaryProps) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">SUMMARY</h2>
            <p className="text-gray-700">{summary}</p>
        </section>
    );
};