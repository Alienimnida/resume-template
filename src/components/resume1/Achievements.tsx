import { Achievement } from '@/types/resume1';

interface AchievementsProps {
    achievements: Achievement[];
}

export const Achievements = ({ achievements }: AchievementsProps) => (
    <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b border-white pb-2">
            KEY ACHIEVEMENTS
        </h2>
        {achievements.map((achievement, index) => (
            <div key={index} className="mb-4">
                <h3 className="font-semibold mb-2">{achievement.title}</h3>
                <p className="text-sm">{achievement.description}</p>
            </div>
        ))}
    </div>
);
