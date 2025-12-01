import "./SkillsSection.css"
interface Skill {
    name: string,
    icon: string,
    color: string
}

const skills: Skill[] = [
    { name: "HTML", icon: "🔶", color: "#e34c26" },
    { name: "CSS", icon: "🎨", color: "#264de4" },
    { name: "JavaScript", icon: "✨", color: "#f0db4f" },
    { name: "TypeScript", icon: "💙", color: "#3178c6" },
    { name: "React", icon: "⚛️", color: "#61dafb" },
    { name: "Redux", icon: "🌀", color: "#764abc" },

    { name: "Java", icon: "☕", color: "#f89820" },
    { name: "Spring Boot", icon: "🌱", color: "#6db33f" },
    { name: "Node.js", icon: "🟩", color: "#3c873a" },

    { name: "Git", icon: "🔧", color: "#f1502f" },
    { name: "GitHub", icon: "🐙", color: "#000" },
    { name: "VS Code", icon: "🧩", color: "#007ACC" },
];

function SkillsSection() {
    return (
        <div className="skills-wrapper">
            <p className="skills-subtitle">MY SKILLS</p>

            <h2 className="skills-title">Tools & Technologies I Use</h2>

            <p className="intro">
                On her way she met a copy.
                The copy warned the Little Blind Text, that where it came from it would
                have been rewritten a thousand times and everything that was left from
                its origin would be the word “and” and the Little Blind Text should
                turn around and return to its own, safe country.
            </p>
            <p className="intro">
                On her way she met a copy.
                The copy warned the Little Blind Text, that where it came from it would
                have been rewritten a thousand times and everything that was left from
                its origin would be the word “and” and the Little Blind Text should
                turn around and return to its own, safe country.
            </p>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <span className="skill-icon" style={{ color: skill.color }}>
                            {skill.icon}
                        </span>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsSection;