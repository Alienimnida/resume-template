import { ResumeData } from '@/types/resume1';

interface HeaderProps {
    name: ResumeData['name'];
    title: ResumeData['title'];
    contact: ResumeData['contact'];
}

export const Header = ({ name, title, contact }: HeaderProps) => {
    return (
        <header className="text-center mb-8">
            <h1 className="text-serif text-2xl font-bold mb-1">{name.toUpperCase()}</h1>
            <p className="text-gray-500 text-sm mb-1">{title}</p>
            <div className="text-gray-600 text-sm flex items-center justify-center gap-2">
                <span className="text-gray-700">{contact.email}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700">{contact.linkedin}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-700">{contact.location}</span>
            </div>
        </header>
    );
};