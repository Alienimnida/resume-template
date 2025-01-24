import { HeaderInfo } from "@/types/resume"
interface HeaderProps {
    name: HeaderInfo['name'];
    title: HeaderInfo['subtitle'];
}
export const Header = ({ name, title }: HeaderProps) => {
    return (
        <div className="flex flex-col items-start space-y-2 mb-6">
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <h1 className="text-5xl font-light text-gray-800">{name}</h1>
            <div className="bg-[#9dd9b8] text-gray-800 px-4 py-2 rounded-lg text-lg font-medium">
                {title}
            </div>
        </div>
    )
}
