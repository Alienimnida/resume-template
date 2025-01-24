import { HeaderInfo } from '@/types/resume';
import { AtSign, Link, MapPin, Phone } from "lucide-react";

interface HeaderProps {
    name: HeaderInfo['name'];
    title: HeaderInfo['subtitle'];
    phone: HeaderInfo['phone'];
    email: HeaderInfo['email'];
    location: HeaderInfo['location'];
    link: HeaderInfo['links'][0]['url'];
}
export const Header = ({ name, title, phone, email, location, link }: HeaderProps) => {
    return (
        <div className="px-8 py-6 flex justify-between items-start">
            <div className="space-y-3">
                <div>
                    <h1 className="text-4xl text-[#002b7f] font-bold tracking-wide">{name}</h1>
                    <h2 className="text-[#fc7c21] text-xl mt-1.5 font-bold">{title}</h2>
                </div>

                <div className="flex items-center justify-between space-x-20 text-sm">
                    <div className="flex items-center gap-2">
                        <Phone color="#fc7c21" />
                        <span>{phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <AtSign color="#fc7c21" />
                        <span>{email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link color="#fc7c21" />
                        <span>{link}</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <MapPin color="#fc7c21" />
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
};
