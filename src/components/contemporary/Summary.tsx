import { UserRound } from 'lucide-react'
export const SummarySection = ({ text }: { text: string }) => {
    return (
        <div className="flex flex-col items-start space-y-2 mb-6">
            <h2 className="text-lg font-semibold text-[#185449] flex items-center">
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <span className="bg-green-200 p-2 rounded-lg mr-2">
                    <UserRound size={20} color="#185449" strokeWidth={3} />
                </span>
                SUMMARY
            </h2>
            <p className="text-gray-700 leading-relaxed">{text}</p>
        </div>
    )
}
