import { ResumeData } from '@/types/resume1'
interface HeaderProps {
    name: ResumeData['name'];
    title: ResumeData['title'];
    contactInfo: ResumeData['contact'];
}
export const Header = ({ name, title, contactInfo }: HeaderProps) => {
    return (
        <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">{name}</h1>
            <div className="text-blue-500 font-medium mb-4">{title}</div>
            <div className="flex flex-wrap gap-6 text-gray-600">
                <div className="flex items-center gap-2">{contactInfo.email}</div>
                <div className="flex items-center gap-2">{contactInfo.linkedin}</div>
                <div className="flex items-center gap-2">{contactInfo.location}</div>
            </div>
        </header>
    );
};