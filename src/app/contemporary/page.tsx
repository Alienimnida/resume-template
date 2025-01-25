import { Header } from "@/components/contemporary/Header";
import { Contacts } from "@/components/contemporary/Contacts";
import { SummarySection } from "@/components/contemporary/Summary";
import { headerInfo, summary, experiences, keyAchievements, education, certificates, skills, languages } from "@/data/data";
import { ExperienceSection } from "@/components/contemporary/Experience";
import { AchievementSection } from "@/components/contemporary/Achievements";
import { EducationSection } from "@/components/contemporary/Education";
import { CertificateSection } from "@/components/contemporary/Certifications";
import { SkillsSection } from "@/components/contemporary/Skills";
import { LanguagesSection } from "@/components/contemporary/Language";

export default function ResumePage() {
    return (
        <main className="max-w-5xl mx-auto bg-white shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-1/3">
                    <Contacts
                        phone={headerInfo.phone}
                        email={headerInfo.email}
                        location={headerInfo.location}
                        link={headerInfo.links[0].url}
                    />
                    <AchievementSection achievements={keyAchievements} />
                    <CertificateSection certifications={certificates} />
                    <SkillsSection skills={skills} />
                </aside>

                <section className="flex-1">
                    <Header name={headerInfo.name} title={headerInfo.subtitle} />
                    <SummarySection text={summary} />
                    <ExperienceSection experiences={experiences} />
                    <EducationSection educations={education} />
                    <LanguagesSection languages={languages} />
                </section>
            </div>
        </main>
    );
};
