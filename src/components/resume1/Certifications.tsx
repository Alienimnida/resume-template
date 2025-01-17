import { Certification } from '@/types/resume1';

interface CertificationsProps {
    certifications: Certification[];
}

export const Certifications = ({ certifications }: CertificationsProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-white pb-2">
            CERTIFICATION
        </h2>
        {certifications.map((cert, index) => (
            <div key={index} className="mb-4">
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm">{cert.description}</p>
            </div>
        ))}
    </div>
);
