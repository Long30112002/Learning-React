import "./AboutSection.css";
interface Props {
    name: string
}
function AboutSection({name} : Props) {
    return (
        <section className="about-section">

            <p className="subtitle">ABOUT US</p>
            <h1 className="title">WHO AM I?</h1>

            <p className="intro">
                <strong>Hi I'm {name}</strong> On her way she met a copy.
                The copy warned the Little Blind Text, that where it came from it would
                have been rewritten a thousand times and everything that was left from
                its origin would be the word “and” and the Little Blind Text should
                turn around and return to its own, safe country.
            </p>

            <p className="intro">
                Even the all-powerful Pointing has no control about the blind texts it is
                an almost unorthographic life One day however a small line of blind text
                by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>

            {/* Service boxes */}
            <div className="services-container">
                <div className="service-box blue">
                    <div className="icon">💡</div>
                    <p className="label">Graphic Design</p>
                </div>

                <div className="service-box red">
                    <div className="icon">🎨</div>
                    <p className="label">Web Design</p>
                </div>

                <div className="service-box yellow">
                    <div className="icon">🪙</div>
                    <p className="label">Software</p>
                </div>

                <div className="service-box purple">
                    <div className="icon">📱</div>
                    <p className="label">Application</p>
                </div>
            </div>

            {/* Banner */}
            <div className="about-banner">
                <h1>
                    I am happy to know you <br />
                    that <strong>300+ projects done sucessfully!</strong>
                </h1>

                <button className="hire-btn">HIRE ME</button>
            </div>

        </section>
    );
}

export default AboutSection;
