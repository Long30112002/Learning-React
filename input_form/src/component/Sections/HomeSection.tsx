import "./HomeSection.css";
interface Props {
    name: string,
}
function HomeSection({name} :Props) {
    return (
        <section className="home-section">
            <div className="home-content">
                <h1>Hello, I'm {name}</h1>
                <p>I'm a Fullstack Developer based in VietNam.</p>
                <div className="home-buttons">
                    <button>My Projects</button>
                    <button>Contact Me</button>
                </div>
            </div>
            <div className="home-image">
                <img src="https://i.pravatar.cc/300" alt="Profile" />
            </div>
        </section>
    );
}

export default HomeSection;
``