import { QuoteProps } from "@/types/resume1";

export const Quote = ({ text, author }: QuoteProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-white pb-2">
            FAVORITE QUOTE
        </h2>
        <p className="text-sm italic mb-2">{text}</p>
        <p className="text-sm">― {author}</p>
    </div>
);