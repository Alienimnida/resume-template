import React from 'react';
import { Header } from '@/components/timeline/Header';
import { Summary } from '@/components/timeline/Summary';
import { ExperienceSection } from '@/components/timeline/Experience';
import { EducationSection } from '@/components/timeline/Education';
import { SkillSection } from '@/components/timeline/Skills';
import { AchievementSection } from '@/components/timeline/Achievements';
import { headerInfo, summary, experiences, education, skills, keyAchievements } from '@/data/data';


const Home = () => {
    return (
        <main className="max-w-5xl mx-auto bg-white shadow-lg">
            <Header
                name={headerInfo.name}
                title={headerInfo.subtitle}
                phone={headerInfo.phone}
                email={headerInfo.email}
                location={headerInfo.location}
                link={headerInfo.links[0].url}
            />
            <Summary text={summary} />
            <ExperienceSection experiences={experiences} />
            <EducationSection education={education} />
            <SkillSection skill={skills} />
            <AchievementSection achievements={keyAchievements} />

        </main>
    );
};

export default Home;