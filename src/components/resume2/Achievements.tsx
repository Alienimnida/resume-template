import { KeyAchievement } from "@/types/resume2";
export const KeyAchievements = ({ achievements }: { achievements: KeyAchievement[] }) => {
    return (
        <section className="mb-6">
            <h2 className="text-xl font-bold text-[#0C2340] border-b-2 border-[#0C2340] pb-1 mb-4">
                KEY ACHIEVEMENTS
            </h2>
            <div className="space-y-4">
                {achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3">
                        <div className="text-[#0C2340]">
                            <achievement.icon size={24} strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="font-bold text-[#0C2340] text-sm">
                                {achievement.title}
                            </h3>
                            <p className="text-gray-700 text-sm">
                                {achievement.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};