import { AchievementSection } from '@/components/ivyLeague/Achievements';
import { CertificationItem } from '@/components/ivyLeague/Certification';
import { EducationSection } from '@/components/ivyLeague/Education';
import { ExperienceSection } from '@/components/ivyLeague/Experience';
import { Header } from '@/components/ivyLeague/Header';
import { Skills } from '@/components/ivyLeague/Skills';
import { Summary } from '@/components/ivyLeague/Summary';
import { resumeData } from '@/data/resume1Data';

export default function ResumePage() {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white">
            <Header
                name={resumeData.name}
                title={resumeData.title}
                contact={resumeData.contactInfo}
            />
            <Summary summary={resumeData.summary} />
            <ExperienceSection experiences={resumeData.experience} />
            <EducationSection educations={resumeData.education} />
            <AchievementSection achievements={resumeData.achievements} />
            <Skills skills={resumeData.skills.flat()} />
            <CertificationItem certifications={resumeData.certifications} />
        </div>
    );
};
