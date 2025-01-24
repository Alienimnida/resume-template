import { ContactRound } from 'lucide-react'
import { Experience } from '@/types/resume'

export const ExperienceSection = ({ experiences }: { experiences: Experience[] }) => {
    return (
        <div className="flex flex-col items-start space-y-2 mb-6">
            <h2 className="text-lg font-semibold text-[#185449] flex items-center">
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <span className="bg-green-200 p-2 rounded-lg mr-2">
                    <ContactRound size={20} color="#185449" strokeWidth={3} />
                </span>
                EXPERIENCE
            </h2>
            {experiences.map((exp, index) => (
                <div className="mb-6" key={index}>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-md font-semibold text-gray-800">{exp.companyName}</h3>
                            <p className="text-sm text-gray-600">{exp.position}</p>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p className="text-sm text-gray-500">{exp.location}</p>
                            <p className="text-sm text-gray-500 mb-2">{exp.startDate} - {exp.endDate ? exp.endDate : "Present"}</p>
                        </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                        {exp.bullets.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
