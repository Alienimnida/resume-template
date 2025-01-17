import { Header } from '@/components/resume1/Header';
import { Achievements } from '@/components/resume1/Achievements';
import { ExperienceSection } from '@/components/resume1/Experience';
import { EducationSection } from '@/components/resume1/Education';
import { Languages } from '@/components/resume1/Languages';
import { Skills } from '@/components/resume1/Skills';
import { Certifications } from '@/components/resume1/Certifications';
import { Quote } from '@/components/resume1/Quote';
import { resumeData } from '@/data/resume1Data';
import { Passions } from '@/components/resume1/Passions';

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="max-w-5xl mx-auto grid grid-cols-12 gap-8">
                <div className="col-span-4 bg-teal-700 text-white p-6 rounded-l">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold mb-2">{resumeData.name}</h1>
                    </div>

                    <Achievements achievements={resumeData.achievements} />
                    <Certifications certifications={resumeData.certifications} />
                    <Passions passions={resumeData.passions} />
                    <Quote
                        text="Quality means doing it right when no one is looking"
                        author="Henry Ford"
                    />
                    <Languages languages={resumeData.languages} />
                </div>
                <div className="col-span-8 p-6">
                    <Header
                        name={resumeData.name}
                        title={resumeData.title}
                        contactInfo={resumeData.contactInfo}
                    />

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                            SUMMARY
                        </h2>
                        <p className="text-gray-700">{resumeData.summary}</p>
                    </div>

                    <ExperienceSection experiences={resumeData.experience} />
                    <Skills skills={resumeData.skills} />
                    <EducationSection education={resumeData.education} />
                </div>
            </div>
        </div>
    );
}