import { ResumeData } from '@/types/resume2';
import { WandSparkles, Check, Star, Award } from 'lucide-react';

export const resumeData: ResumeData = {
    name: "BRANDON HALE",
    title: "Senior Business Development Director | Biotech & Pharma Expertise",
    contact: {
        phone: "+1-(234)-555-1234",
        email: "help@enhancv.com",
        linkedin: "linkedin.com",
        location: "Jacksonville, Florida"
    },
    imageUrl: "/profile_pic.jpg",
    summary: "With over a decade of experience in the biopharmaceutical industry, I have successfully spearheaded business development initiatives, consistently exceeding sales targets. My acumen in maintaining relationships, analyzing market trends, and leading high-impact projects has been a cornerstone of my career, highlighted by a pivotal role in generating $30M in new business for a leading CRO. Eager to bring my expertise to a senior business development position.",
    experiences: [
        {
            title: "Business Development Manager",
            company: "Genentech",
            duration: "05/2018 - 12/2021",
            location: "San Francisco, CA, USA",
            responsibilities: [
                "Generated $30M in new sales revenue by identifying and securing strategic partnerships within the biotechnology sector.",
                "Increased client portfolio by 40% through targeted outreach and networking efforts, introducing 25+ new pharmaceutical products to the company's catalog.",
                "Led cross-functional teams to develop highly effective marketing strategies resulting in a 15% increase in year-over-year revenue.",
                "Designed and executed innovative customer retention programs that boosted long-term contracts by 30% and improved overall client satisfaction rates."
            ]
        },
        {
            title: "Regional Sales Director",
            company: "Regeneron Pharmaceuticals",
            duration: "01/2015 - 04/2018",
            location: "Tarrytown, NY, USA",
            responsibilities: [
                "Surpassed sales goals by 20% for two consecutive years, growing the regional sales revenue to $50M.",
                "Developed and maintained a high-performance sales team, achieving a 15% increase in productivity through targeted training and development.",
                "Successfully launched three blockbuster drugs in the regional market, capturing a 10% market share within the first six months of launch.",
                "Implemented a CRM system that enhanced customer tracking and sales force efficiency by 25%.",
                "Negotiated key contracts with hospital networks, contributing to a 20% expansion of the company's market penetration."
            ]
        },
        {
            title: "Key Account Manager",
            company: "Pfizer Inc.",
            duration: "06/2010 - 12/2014",
            location: "New York, NY, USA",
            responsibilities: [
                "Managed the growth of strategic accounts, resulting in a 35% increase in annual revenue from top-tier clients.",
                "Orchestrated the successful entry of Pfizer's portfolio into new therapeutic areas, growing the account base by 20%.",
                "Cemented Pfizer's market presence by brokering pivotal alliances with industry leaders, amplifying pipeline development opportunities."
            ]
        }
    ],
    education: [
        {
            degree: "Master of Business Administration",
            school: "University of Florida",
            duration: "01/2007 - 01/2009",
            location: "Gainesville, FL, USA"
        },
        {
            degree: "Bachelor of Science in Biotechnology",
            school: "Florida State University",
            duration: "01/2003 - 01/2007",
            location: "Tallahassee, FL, USA"
        }
    ],
    keyAchievements: [
        {
            icon: WandSparkles,
            title: "Top Regional Sales Performer",
            description: "Recognized as the top-performing sales director at Regeneron Pharmaceuticals."
        },
        {
            icon: Check,
            title: "Successful Product Launch",
            description: "Coordinated the launch campaign for a blockbuster drug at Regeneron, resulting in a $15M revenue surge."
        },
        {
            icon: Star,
            title: "Strategic Accounts Revenue Growth",
            description: "Spearheaded a strategic account initiative at Pfizer, leading to a 35% increase in annual sales from key clients."
        },
        {
            icon: Award,
            title: "Sales Team Development Award",
            description: "Revamped the sales training program at Genentech, boosting team performance by 15%."
        }
    ],
    courses: [
        {
            title: "Advanced Biopharmaceutical Business Development",
            description: "Explored strategic partnership models and contract negotiations offered by Harvard Business School."
        },
        {
            title: "Regulatory Affairs for Biologics",
            description: "Covered the key aspects of FDA and EMA regulations through a course provided by Coursera."
        }
    ],
    passions: [
        {
            icon: WandSparkles,
            title: "Leadership and Mentoring",
            description: "Enthusiastic about developing sales talent and fostering leadership skills within teams."
        },
        {
            icon: Star,
            title: "Community Outreach",
            description: "Actively involved in community outreach programs, advocating for science education & opportunities for underrepresented groups."
        }
    ],
    skills: [
        "Business Development",
        "Strategic Sales Planning",
        "Client Retention Strategies",
        "CRM Systems",
        "Market Analysis"
    ]
};