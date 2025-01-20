import { ResumeData } from '@/types/resume1';

interface AchievementSectionProps {
    achievements: ResumeData['Achievements'];
}

export const AchievementSection = ({ achievements }: AchievementSectionProps) => {
    return (
        <section className="mb-8">
            <div className="relative text-center mb-4">
                <h2 className="text-xl font-bold mb-1 font-serif">Key Achievements</h2>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                    <div
                        key={index}
                        className="p-6"
                    >
                        <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
