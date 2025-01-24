import { KeyAchievements } from "@/types/resume";
import { Star, Flag } from "lucide-react";

export const AchievementSection = ({ achievements }: { achievements: KeyAchievements[] }) => {
    return (
        <section className="mb-6 px-8 py-6">
            <h2 className="text-2xl font-bold text-[#002b7f] mb-8">KEY ACHIEVEMENTS</h2>
            <ul className="flex flex-wrap gap-8">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start w-full sm:w-[45%]">
                        <div className="text-orange-500 text-2xl mr-4">
                            {index % 2 === 0 ? <Star /> : <Flag />}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#002b7f] mb-2">{achievement.title}</h3>
                            <p className="text-gray-600">{achievement.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

