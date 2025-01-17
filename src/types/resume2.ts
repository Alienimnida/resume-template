import { LucideIcon } from 'lucide-react';

export interface ResumeData {
    name: string;
    title: string;
    contact: {
        phone: string;
        email: string;
        linkedin: string;
        location: string;
    };
    imageUrl: string;
    summary: string;
    experiences: Experience[];
    education: Education[];
    keyAchievements: KeyAchievement[];
    courses: Course[];
    passions: Passion[];
    skills: string[];
}

export interface Experience {
    title: string;
    company: string;
    duration: string;
    location: string;
    responsibilities: string[];
}

export interface Education {
    degree: string;
    school: string;
    duration: string;
    location: string;
}

export interface KeyAchievement {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface Course {
    title: string;
    description: string;
}

export interface Passion {
    icon: LucideIcon;
    title: string;
    description: string;
}