import { Mail, AtSign, Link, MapPin, Phone } from "lucide-react";
import { HeaderInfo } from '@/types/resume'
interface ContactProps {
    phone: HeaderInfo['phone'];
    email: HeaderInfo['email'];
    location: HeaderInfo['location'];
    link: HeaderInfo['links'][0]['url'];
}
export const Contacts = ({ phone, email, location, link }: ContactProps) => {
    return (
        <div className="flex flex-col items-center space-y-6 mb-4">
            <div className="relative w-32 h-32">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-200 rounded-full z-0"></div>
                <div className="absolute top-8 -right-6 w-24 h-24 bg-green-100 rounded-full z-0"></div>
                <img
                    src="profile_pic.jpg"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover relative z-10"
                />
            </div>

            <div className="space-y-2 text-center">
                <h2 className="text-lg font-semibold text-[#185449] flex items-center">
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <span className="bg-green-200 p-2 rounded-lg mr-2">
                        <Mail size={20} color="#185449" strokeWidth={3} />
                    </span>
                    CONTACTS
                </h2>

                <div className="space-y-1 text-sm text-gray-700">
                    <p className="flex items-center">
                        <span className="text-green-700 mr-2">
                            <Phone size={16} color="#9dd9b8" />
                        </span>
                        {phone}
                    </p>
                    <p className="flex items-center">
                        <span className="text-green-700 mr-2">
                            <AtSign size={16} color="#9dd9b8" />
                        </span>
                        {email}
                    </p>
                    <p className="flex items-center">
                        <span className="text-green-700 mr-2">
                            <Link size={16} color="#9dd9b8" />
                        </span>
                        {link}
                    </p>
                    <p className="flex items-center">
                        <span className="text-green-700 mr-2">
                            <MapPin size={16} color="#9dd9b8" />
                        </span>
                        {location}
                    </p>
                </div>
            </div>
        </div>

    )
}
