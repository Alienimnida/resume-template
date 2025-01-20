import { resumeData } from '@/data/resume1Data';
import { Header } from '@/components/doubleColumn/Header';
import { Summary } from '@/components/doubleColumn/Summary';
import { Experience } from '@/components/doubleColumn/Experience';
import { Education } from '@/components/doubleColumn/Education';
import { KeyAchievements } from '@/components/doubleColumn/Achievements';
import { Skills } from '@/components/doubleColumn/Skills';
import { Courses } from '@/components/doubleColumn/Courses';
import { MyDay } from '@/components/doubleColumn/MyDay';

export default function ResumePage() {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white">
            <Header
                name={resumeData.name}
                title={resumeData.title}
                contactInfo={resumeData.contactInfo}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <Summary summary={resumeData.summary} />
                    <Experience experience={resumeData.experience} />
                    <Education education={resumeData.education} />
                </div>

                {/* Right Column */}
                <div>
                    <KeyAchievements achievements={resumeData.achievements} />
                    <Skills skills={resumeData.skills} />
                    <Courses certifications={resumeData.certifications} />
                    <MyDay />
                </div>
            </div>
        </div>
    );
}