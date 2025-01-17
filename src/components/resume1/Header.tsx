import { ContactInfo } from '@/types/resume1';

interface HeaderProps {
    name: string;
    title: string;
    contactInfo: ContactInfo;
}

export const Header = ({ title, contactInfo }: HeaderProps) => (
    <div className="mb-8">
        <h2 className="text-2xl text-teal-400 font-semibold mb-2">{title}</h2>
        <div className="flex gap-4 text-gray-600 mb-4">
            <span>{contactInfo.email}</span>
            <span>{contactInfo.linkedin}</span>
            <span>{contactInfo.location}</span>
        </div>
    </div>
);