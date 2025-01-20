import { ResumeData } from '@/types/resume1';

interface CertificationItemProps {
    certifications: ResumeData['Certification'];
}

export const CertificationItem = ({ certifications }: CertificationItemProps) => {
    return (
        <section className="mb-8">
            <div className="relative text-center mb-4">
                <h2 className="text-xl font-bold mb-1 font-serif">Certification</h2>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
            </div>
            <div className="space-y-6">
                {certifications.map((certification, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">{certification.title}</h3>
                        <p className="text-gray-700">{certification.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
