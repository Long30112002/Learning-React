import "./ExperienceSection.css"
// import { Briefcase, Laptop, Code } from "lucide-react";

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    time: string;
    description: string;
    // icon: React.ReactNode;
    bg: string;
    technologies: string[];
}

const experienceData: ExperienceItem[] = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Freelance",
        time: "2023 - Present",
        description:
            "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
        // icon: <Laptop size={22} />,
        bg: "bg-blue-50",
        technologies: ["React", "TypeScript", "Tailwind", "Redux Toolkit"],
    },
    {
        id: 2,
        role: "Java Backend Developer",
        company: "FPT Software",
        time: "2022 - 2023",
        description:
            "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
        // icon: <Code size={22} />,
        bg: "bg-green-50",
        technologies: ["Spring Boot", "MySQL", "JWT", "Spring Security"],
    },
    {
        id: 3,
        role: "Intern Developer",
        company: "Local Startup",
        time: "2021 - 2022",
        description:
            "Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.",
        // icon: <Briefcase size={22} />,
        bg: "bg-orange-50",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
];

function ExperienceSection() {
    return (
        <div className="experience-section">
            <p className="subtitle">Experience</p>
            <h1 className="title">Work Experience</h1>
            
            {experienceData.map((exp) => (
                <div key={exp.id} className={`experience-card ${exp.bg}`}>
                    <div className="d-flex align-items-start gap-3">
                        {/* <div className="experience-icon">{exp.icon}</div> */}
                        <div className="flex-grow-1">
                            <h3 className="experience-role">{exp.role}</h3>
                            <p className="experience-company">{exp.company} • {exp.time}</p>
                            <p className="experience-description">{exp.description}</p>
                            <div className="experience-techs">
                                {exp.technologies.map((tech, idx) => (
                                    <span key={idx}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default ExperienceSection; 