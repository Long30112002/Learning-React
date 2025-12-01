import "./Sidebar.css";

interface SidebarProps {
  sections: { id: string; label: string }[];
  active: string;
  scrollToSection: (id: string) => void;
  menuItemRefs: Record<string, React.RefObject<HTMLLIElement | null>>;
}

function Sidebar({ sections, active, scrollToSection, menuItemRefs }: SidebarProps) {
  return (
    <div className="sidebar">
      {/* Profile */}
      <div className="profile">
        <img className="avatar" src="https://i.pravatar.cc/150" alt="avatar" />
        <h3 className="name">Hoàng Tuấn Long</h3>
        <p>Developer in VietNam</p>
      </div>

      {/* Menu */}
      <ul className="menu">
        <div className="indicator"></div>

        {sections.map(item => (
          <li
            key={item.id}
            ref={menuItemRefs[item.id]}
            className={active === item.id ? "active" : ""}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="sidebar-footer">
        <p>
          © Copyright 2025  
          <br /> All rights reserved  
          <br /> Demo Images: Unsplash
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
