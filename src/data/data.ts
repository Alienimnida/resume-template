import { Awards, Certificate, Education, Experience, HeaderInfo, KeyAchievements, Languages, Project, Skills, VolunteerExperience } from '@/types/resume';

export const headerInfo: HeaderInfo = {
    name: "Maeve Delaney",
    subtitle: "Strategic Sourcing Leader | Procurement Specialist | Team Management",
    phone: "+1-(234)-555-1234",
    email: "maeve.delaney@example.com",
    location: "Charlotte, North Carolina",
    links: [
        {
            icon: "Linkedin",
            url: "https://linkedin.com/in/maeve-delaney",
            name: "LinkedIn"
        },
        {
            icon: "Portfolio",
            url: "https://maevedelaney.com",
            name: "Portfolio"
        },
        {
            icon: "Github",
            url: "https://github.com/maevedelaney",
            name: "GitHub"
        }
    ]
};

export const summary: string = "With over a decade of experience in the biopharmaceutical industry, I have successfully spearheaded business development initiatives, consistently exceeding sales targets. My acumen in maintaining relationships, analyzing market trends, and leading high-impact projects has been a cornerstone of my career, highlighted by a pivotal role in generating $30M in new business for a leading CRO. Eager to bring my expertise to a senior business development position."

export const experiences: Experience[] = [
    {
        companyName: "Premier Inc.",
        companyUrl: "https://www.premierinc.com",
        position: "Senior Sourcing Manager",
        description: "Leading strategic sourcing initiatives and procurement transformation",
        startDate: "06/2018",
        currentlyWorking: true,
        endDate: null,
        location: "Charlotte, NC",
        bullets: [
            "Developed and executed category strategy for medical supplies, reducing annual costs by 15% through strategic supplier consolidation.",
            "Led cross-functional teams in the successful negotiation of complex service contracts, yielding a 20% improvement in service level agreements.",
            "Implemented a supplier performance management system, enhancing supplier quality and compliance.",
            "Managed a portfolio of $500M in indirect spend, driving the adoption of cost-saving measures.",
            "Pioneered a supplier diversity program that expanded the supplier base by 30%.",
            "Orchestrated a major procurement transformation project, improving decision-making timeframes by 40%."
        ]
    },
    {
        companyName: "Honeywell",
        companyUrl: "https://www.honeywell.com",
        position: "Category Manager",
        description: "Managing electronics category and supplier relationships",
        startDate: "01/2015",
        currentlyWorking: false,
        endDate: "05/2018",
        location: "Fort Mill, SC",
        bullets: [
            "Executed multi-year growth plans for the electronics category, delivering 10% YoY cost reduction.",
            "Conducted extensive market trends analysis for cost-saving opportunities.",
            "Improved supplier on-time delivery rates by 25%.",
            "Generated $200 million in savings through vendor selection optimization."
        ]
    }
];

export const education: Education[] = [
    {
        institutionName: "Duke University",
        institutionLogo: "/duke-logo.png",
        institutionUrl: "https://duke.edu",
        degree: "Master of Business Administration",
        startDate: "01/2007",
        endDate: "01/2009",
        score: 3.8,
        scoreOutof: 4.0,
        scoreType: "CGPA",
        bullets: [
            "Specialized in Supply Chain Management",
            "President of Supply Chain Management Club",
            "Completed thesis on Sustainable Procurement Practices"
        ]
    },
    {
        institutionName: "North Carolina State University",
        institutionLogo: "/ncstate-logo.png",
        institutionUrl: "https://www.ncsu.edu",
        degree: "Bachelor of Science in Supply Chain Management",
        startDate: "01/2003",
        endDate: "01/2007",
        score: 3.7,
        scoreOutof: 4.0,
        scoreType: "CGPA",
        bullets: [
            "Minor in Business Analytics",
            "Dean's List all semesters",
            "Vice President of Operations Management Society"
        ]
    }
];

export const skills: Skills[] = [
    { name: "Strategic Sourcing", level: 95 },
    { name: "Supplier Relationship Management", level: 90 },
    { name: "Contract Negotiation", level: 88 },
    { name: "Category Management", level: 92 },
    { name: "Procurement Analytics", level: 85 },
    { name: "Supply Chain Optimization", level: 87 }
];

export const languages: Languages[] = [
    { name: "English", proficiency: 100 },
    { name: "Spanish", proficiency: 75 },
    { name: "Mandarin", proficiency: 45 }
];

export const projects: Project[] = [
    {
        name: "Procurement Transformation Initiative",
        url: "https://example.com/projects/procurement-transformation",
        description: "Led enterprise-wide procurement digital transformation",
        technologies: ["SAP Ariba", "Power BI", "Tableau"],
        location: "Premier Inc.",
        bullets: [
            "Implemented automated sourcing processes",
            "Developed real-time procurement analytics dashboard",
            "Reduced procurement cycle time by 40%"
        ]
    },
    {
        name: "Supplier Diversity Program",
        url: "https://example.com/projects/supplier-diversity",
        description: "Established comprehensive supplier diversity program",
        technologies: ["Supplier Portal", "D&B Analytics", "PowerBI"],
        location: "Premier Inc.",
        bullets: [
            "Increased diverse supplier spend by 30%",
            "Created supplier mentorship program",
            "Implemented diversity tracking metrics"
        ]
    }
];

export const certificates: Certificate[] = [
    {
        name: "Certified Professional in Supply Management (CPSM)",
        issuedBy: "Institute for Supply Management",
        date: "2019",
        url: "https://example.com/certs/cpsm",
        description: "Advanced certification in supply management principles and practices"
    },
    {
        name: "Certified Supply Chain Professional (CSCP)",
        issuedBy: "ASCM",
        date: "2017",
        url: "https://example.com/certs/cscp",
        description: "Comprehensive supply chain management certification"
    }
];

export const keyAchievements: KeyAchievements[] = [
    {
        title: "Cost Savings Champion",
        description: "Achieved $200M+ in cost savings through strategic sourcing initiatives",
        icon: "🏆"
    },
    {
        title: "Digital Transformation Leader",
        description: "Led procurement digitalization project improving efficiency by 40%",
        icon: "💡"
    },
    {
        title: "Diversity & Inclusion Pioneer",
        description: "Established supplier diversity program increasing diverse spend by 30%",
        icon: "🌟"
    }
];

export const volunteerExperience: VolunteerExperience[] = [
    {
        title: "Supply Chain Mentor",
        description: "Institute for Supply Management - Mentorship Program",
        location: "Charlotte, NC",
        bullets: [
            "Mentored 5 early-career procurement professionals",
            "Conducted monthly career development sessions",
            "Organized networking events for mentorship program"
        ]
    }
];

export const awards: Awards[] = [
    {
        name: "Procurement Excellence Award",
        description: "Recognized for outstanding contribution to procurement transformation",
        url: "https://example.com/awards/procurement-excellence",
        icon: "🏆"
    },
    {
        name: "Supply Chain Innovation Award",
        description: "Awarded for implementing innovative supplier management system",
        url: "https://example.com/awards/innovation",
        icon: "⭐"
    }
];