import "./ServicesSection.css";

const services = [
  {
    title: "INNOVATIVE IDEAS",
    desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    color: "#3b82f6",
    icon: "💡",
  },
  {
    title: "SOFTWARE",
    desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    color: "#ef4444",
    icon: "🧱",
  },
  {
    title: "APPLICATION",
    desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    color: "#facc15",
    icon: "📱",
  },
  {
    title: "GRAPHIC DESIGN",
    desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    color: "#a855f7",
    icon: "📐",
  },
  {
    title: "SOFTWARE",
    desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    color: "#14b8a6",
    icon: "🗄️",
  },
  {
    title: "APPLICATION",
    desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics",
    color: "#3b82f6",
    icon: "📲",
  },
];

function ServiceSection() {

  return (
    <div className="service-wrapper">
      <p className="service-subtitle">WHAT I DO ?</p>
      <h2 className="service-title">HERE ARE SOME OF MY EXPERTISE</h2>

      <div className="service-grid">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <div
              className="service-icon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>

            <h3 className="service-card-title">{item.title}</h3>
            <p className="service-card-desc">{item.desc}</p>

            <div
              className="service-bottom-line"
              style={{ backgroundColor: item.color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
