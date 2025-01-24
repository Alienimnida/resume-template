import { Flag } from 'lucide-react'
import { KeyAchievements } from '@/types/resume'
export const AchievementSection = ({ achievements }: { achievements: KeyAchievements[] }) => {
    return (
        <div className="flex flex-col items-start space-y-2 mb-6">
            <h2 className="text-lg font-semibold text-[#185449] flex items-center">
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <span className="bg-green-200 p-2 rounded-lg mr-2">
                    <Flag size={20} color="#185449" strokeWidth={3} />
                </span>
                KEY ACHIEVEMENTS
            </h2>
            {achievements.map((achievement, index) => (
                <div key={index} className="space-y-4">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-1.5"></div>
                        <div>
                            <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                            <p className="text-sm text-gray-600">
                                {achievement.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}