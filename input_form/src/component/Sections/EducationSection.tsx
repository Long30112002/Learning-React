import { useState } from "react";
import "./EducationSection.css";

interface EducationItem {
    title: string;
    school: string;
    time: string;
    description: string;
    fileName: string;
}

const educationItem: EducationItem[] = [
    {
        title: "Bachelor of Information Technology",
        school: "University of Technology",
        time: "2021 - 2025",
        description: "Focused on software development, database systems, networking, and web technologies.",
        fileName: "Gua_Certificate.pdf"
    },
    {
        title: "Frontend Development Certification",
        school: "F8 / FreeCodeCamp",
        time: "2022",
        description: "Completed courses on HTML, CSS, JavaScript, React and modern web tools.",
        fileName: "PET_Result.pdf"
    }
]

function EducationSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div className="education-container">
            <p className="edu-subtitle">EDUCATION</p>
            <h2 className="edu-title">My Academic Background</h2>

            <div className="accordion-list">
                {educationItem.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <div
                            className="accordion-header"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="edu-header-left">
                                <span className="edu-icon">🎓</span>
                                <div>
                                    <h3>{item.title}</h3>
                                    <p className="edu-school">{item.school}</p>
                                </div>
                            </div>

                            <span className="arrow">
                                {activeIndex === index ? "▲" : "▼"}
                            </span>
                        </div>

                        <div
                            className={`accordion-content ${activeIndex === index ? "show" : ""
                                }`}
                        >
                            <p className="edu-time">{item.time}</p>
                            <p>{item.description}</p>

                            {/* Floating Button */}
                            <div className="edu-item-actions">
                                <button className="edu-inner-btn">Download {item.fileName}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}


export default EducationSection;