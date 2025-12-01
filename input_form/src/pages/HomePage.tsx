import { useRef, useEffect, useState } from "react";
import "./HomePage.css";
import SectionsContainer from "../component/SideBar/SectionsContainer";
import Sidebar from "../component/SideBar/SideBar";

function HomePage() {
    const sections = [
        { id: "home", label: "HOME" },
        { id: "about", label: "ABOUT" },
        { id: "services", label: "SERVICES" },
        { id: "skills", label: "SKILLS" },
        { id: "education", label: "EDUCATION" },
        { id: "experience", label: "EXPERIENCE" },
        { id: "work", label: "WORK" },
        { id: "blog", label: "BLOG" },
        { id: "contact", label: "CONTACT" },
    ];

    const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        skills: useRef(null),
        education: useRef(null),
        experience: useRef(null),
        work: useRef(null),
        blog: useRef(null),
        contact: useRef(null),
    };

    const menuItemRefs: Record<string, React.RefObject<HTMLLIElement | null>> = {
        home: useRef(null),
        about: useRef(null),
        services: useRef(null),
        skills: useRef(null),
        education: useRef(null),
        experience: useRef(null),
        work: useRef(null),
        blog: useRef(null),
        contact: useRef(null),
    };

    const [active, setActive] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        // Observe all sections
        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const indicator = document.querySelector(".indicator") as HTMLElement;
        const activeItem = menuItemRefs[active].current;

        if (indicator && activeItem) {
            indicator.style.top = activeItem.offsetTop + "px";
            indicator.style.height = activeItem.offsetHeight + "px";
            indicator.style.width = activeItem.offsetWidth + "px";  // dài theo chữ
        }
    }, [active]);

    const scrollToSection = (id: string) => {
        sectionRefs[id].current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="page-container">
            <Sidebar
                sections={sections}
                active={active}
                scrollToSection={scrollToSection}
                menuItemRefs={menuItemRefs}
            />
            <SectionsContainer
                sections={sections}
                sectionRefs={sectionRefs}
            />
        </div>
    );
}

export default HomePage;    