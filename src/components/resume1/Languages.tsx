import { Language } from '@/types/resume1';

interface LanguagesProps {
    languages: Language[];
}

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xs">
                {i < rating ? "★" : "☆"}
            </span>
        ))}
    </div>
);

export const Languages = ({ languages }: LanguagesProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-white pb-2">
            LANGUAGES
        </h2>
        {languages.map((language, index) => (
            <div key={index} className="mb-4">
                <div className="grid grid-cols-2 items-center mb-1">
                    <span className="text-sm">{language.name}</span>
                    <span className="text-sm">{language.level}</span>
                </div>
                <StarRating rating={language.proficiency} />
            </div>
        ))}
    </div>
);
