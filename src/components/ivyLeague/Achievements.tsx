import { ResumeData } from '@/types/resume1';

interface AchievementSectionProps {
    achievements: ResumeData['Achievements'];
}

export const AchievementSection = ({ achievements }: AchievementSectionProps) => {
    return (
        <section className="mb-8">
            <div className="relative mb-4">
                <h2 className="text-xl text-center font-bold mb-2 font-serif">Key Achievements</h2>
                <div className="absolute bottom-0 left-0 w-full h-px bg-black"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => [
                    <div key={`achievement-${index}`} className="text-gray-700">
                        <h3 className="font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-sm leading-normal">{achievement.description}</p>
                    </div>
                ])}
            </div>
        </section>
    );
};
