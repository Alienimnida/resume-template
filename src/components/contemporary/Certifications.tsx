import { FileText } from 'lucide-react'
import { Certificate } from '@/types/resume'

export const CertificateSection = ({ certifications }: { certifications: Certificate[] }) => {
    return (
        <div className="flex flex-col items-start space-y-2 mb-6">
            <h2 className="text-lg font-semibold text-[#185449] flex items-center">
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <span className="bg-green-200 p-2 rounded-lg mr-2">
                    <FileText size={20} color="#185449" strokeWidth={3} />
                </span>
                CERTIFICATES
            </h2>
            {certifications.map((cert, index) => (
                <div className="mb-6" key={index}>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-md font-semibold text-gray-800">{cert.name}</h3>
                            <p className="text-sm text-gray-600">{cert.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
