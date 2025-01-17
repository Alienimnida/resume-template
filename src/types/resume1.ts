export interface Achievement {
    title: string;
    description: string;
}

export interface Experience {
    role: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
}

export interface Education {
    degree: string;
    school: string;
    location: string;
    period: string;
}

export interface Language {
    name: string;
    level: string;
    proficiency: number;
}

export interface ContactInfo {
    email: string;
    linkedin: string;
    location: string;
}

export interface Certification {
    title: string;
    description: string;
}

export interface Passion {
    title: string;
    description: string;
}

export interface SkillsProps {
    skills: string[][];
}

export interface QuoteProps {
    text: string;
    author: string;
}