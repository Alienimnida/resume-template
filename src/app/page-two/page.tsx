import { EducationSection } from '@/components/resume2/Education';
import { ExperienceSection } from '@/components/resume2/Experience';
import { Passions } from '@/components/resume2/Passions';
import { Header } from '@/components/resume2/Header';
import { Summary } from '@/components/resume2/Summary';
import { Skills } from '@/components/resume2/Skills';
import { Courses } from '@/components/resume2/Courses';
import { KeyAchievements } from '@/components/resume2/Achievements';
import { resumeData } from '@/data/resume2Data';


export default function ResumePage() {

    return (
        <main className="max-w-5xl mx-auto bg-white shadow-lg">
            <Header
                name={resumeData.name}
                title={resumeData.title}
                contact={resumeData.contact}
                imageUrl={resumeData.imageUrl}
            />
            <div className="grid grid-cols-[3fr,2fr] gap-8 p-8">
                <div className="space-y-6">
                    <ExperienceSection experiences={resumeData.experiences} />
                    <EducationSection education={resumeData.education} />
                    <Skills skills={resumeData.skills} />
                </div>
                <div className="space-y-6">
                    <Summary text={resumeData.summary} />
                    <KeyAchievements achievements={resumeData.keyAchievements} />
                    <Courses courses={resumeData.courses} />
                    <Passions passions={resumeData.passions} />
                </div>
            </div>
        </main>
    );
}