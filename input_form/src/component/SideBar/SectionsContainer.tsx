import React from "react";
import "./SectionsContainer.css";
import HomeSection from "../Sections/HomeSection";
import AboutSection from "../Sections/AboutSection";
import ServiceSection from "../Sections/ServicesSection";
import SkillsSection from "../Sections/SkillsSection";
import EducationSection from "../Sections/EducationSection";
import ExperienceSection from "../Sections/ExperienceSection";

interface SectionsContainerProps {
  sections: { id: string; label: string }[];
  sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>>;
}

function SectionsContainer({ sections, sectionRefs }: SectionsContainerProps) {
  return (
    <div className="content">
      {sections.map((item) => (
        <section
          key={item.id}
          id={item.id}
          ref={sectionRefs[item.id]}
          className="section"
        >
          {
            item.id === "home" ? (
              <HomeSection name="Hoàng Tuấn Long" />
            )
            : item.id === "about" ? (
              <AboutSection name="Hoàng Tuấn Long"/> 
            )
            : item.id === "services" ? (
              <ServiceSection />
            )
            : item.id === "skills" ? (
              <SkillsSection />
            )
            : item.id === "education" ? (
              <EducationSection/>
            )
            : item.id === "experience" ? (
              <ExperienceSection/>
            )
              :
              (
                <>
                  <h1>{item.label}</h1>
                  <p>
                    Đây là nội dung của mục <strong>{item.label}</strong>.
                    Bạn có thể đặt component riêng cho từng section vào đây sau.
                  </p>
                </>
              )
          }


        </section>
      ))}
    </div>
  );
}

export default SectionsContainer;
