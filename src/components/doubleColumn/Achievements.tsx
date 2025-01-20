import { ResumeData } from "@/types/resume1";
interface KeyAchievementsProps {
    achievements: ResumeData['Achievements'];
}
export const KeyAchievements = ({ achievements }: KeyAchievementsProps) => {
    return (
        <section className="mb-8">
            <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">KEY ACHIEVEMENTS</h2>
            <div className="space-y-4">
                {achievements.map((achievement, index) => (
                    <div key={index}>
                        <h3 className="font-bold mb-2">{achievement.title}</h3>
                        <p className="text-gray-700">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};