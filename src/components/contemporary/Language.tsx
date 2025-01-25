import { Globe } from 'lucide-react';
import { Languages } from '@/types/resume';
export const LanguagesSection = ({ languages }: { languages: Languages[] }) => {
    return (
        <div className="flex flex-col items-start space-y-4 mb-6">
            <h2 className="text-lg font-semibold text-[#185449] flex items-center">
                <span className="bg-green-200 p-2 rounded-lg mr-2">
                    <Globe size={20} color="#185449" strokeWidth={3} />
                </span>
                LANGUAGES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {languages.map((language, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition-all"
                    >
                        <span className="text-sm font-medium text-gray-800">{language.name}</span>
                        <span
                            className={`text-sm font-medium px-3 py-1 rounded-full ${language.proficiency > 75
                                ? 'bg-green-200 text-green-800'
                                : language.proficiency > 50
                                    ? 'bg-yellow-200 text-yellow-800'
                                    : 'bg-red-200 text-red-800'
                                }`}
                        >
                            {language.proficiency}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
