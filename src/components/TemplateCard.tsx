import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
interface TemplateCardProps {
    imageSrc: string;
    title: string;
    description: string;
    link: string;
}

const TemplateCard = ({ imageSrc, title, description, link }: TemplateCardProps) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
            <div className="aspect-[4/5] relative bg-gray-100 p-4">
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="responsive"
                    width={4}
                    height={5}
                    className="rounded border border-gray-200"
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <Link
                    href={link}
                    className="inline-flex items-center gap-2 bg-[#0C2340] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition-colors"
                >
                    <FileText size={20} />
                    View Template
                    <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    );
};

export default TemplateCard;
