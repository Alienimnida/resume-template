export interface ResumeData {
    header: HeaderInfo;
    experience: Experience[];
    education: Education[];
    skills: Skills[];
    languages: Languages[];
    projects: Project[];
    certificates: Certificate[];
    achievements: KeyAchievements[];
    volunteerExperience: VolunteerExperience[];
    awards: Awards[];
}
export type Link = {
    icon: "Github" | "Linkedin" | "Portfolio" | "Twitter" | "External";
    url: string;
    name: string;
}

export type HeaderInfo = {
    name: string;
    subtitle: string;
    phone: string;
    email: string;
    location: string;
    links: Link[];
}

export type Experience = {
    companyName: string;
    companyUrl: string;
    position: string;
    description: string;
    startDate: string;
    currentlyWorking: boolean;
    endDate: string | null;
    location: string;
    bullets: string[];
}

export type Education = {
    institutionName: string;
    institutionLogo: string;
    institutionUrl: string;
    degree: string;
    startDate: string;
    endDate: string;
    score: number;
    scoreOutof: number;
    scoreType: 'CGPA' | 'Percentage';
    bullets: string[];
}

export type Skills = {
    name: string;
    level: number;
}

export type Languages = {
    name: string;
    proficiency: number;
}

export type Project = {
    name: string;
    url: string;
    description: string;
    technologies: string[];
    location: string;
    bullets: string[];
}

export type Certificate = {
    name: string;
    issuedBy: string;
    date: string;
    url: string;
    description: string;
}

export type KeyAchievements = {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export type VolunteerExperience = {
    title: string;
    description: string;
    location: string;
    bullets: string[];
}

export type Awards = {
    name: string;
    description: string;
    url: string;
    icon: string
}