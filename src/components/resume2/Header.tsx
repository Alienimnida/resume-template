import Image from 'next/image';
import { ResumeData } from "@/types/resume2";
import { AtSign, Link, MapPin, Phone } from "lucide-react";
export const Header = ({ name, title, contact, imageUrl }: {
    name: string;
    title: string;
    contact: ResumeData['contact'];
    imageUrl: string;
}) => {
    return (
        <div className="bg-[#0C2340] text-white px-8 py-6 flex justify-between items-start">
            <div className="space-y-3">
                <div>
                    <h1 className="text-4xl font-bold tracking-wide">{name}</h1>
                    <h2 className="text-xl mt-1.5 font-light">{title}</h2>
                </div>

                <div className="grid grid-cols-2 gap-x-12 gap-y-1 text-sm">
                    <div className="flex items-center gap-2">
                        <Phone color="#ffffff" />
                        <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <AtSign color="#ffffff" />
                        <span>{contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link color="#ffffff" />
                        <span>{contact.linkedin}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin color="#ffffff" />
                        <span>{contact.location}</span>
                    </div>
                </div>
            </div>
            <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-white relative">
                <Image
                    src={imageUrl}
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};