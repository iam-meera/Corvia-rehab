import aboutImage from "../assets/generated-about-rehab.jpg";

function About() {
    return (
        <section className="services-bg" id="about">
            <div className="container about-wrap">
                <figure className="about-img">
                    <img src={aboutImage} alt="Physiotherapy assessment at Corvia Rehab" />
                </figure>
                <div className="about-text">
                    <span className="section-tag">About Us</span>
                    <h2>Restoring Movement, Rebuilding Independence</h2>
                    <p>Corvia Rehab is dedicated to providing personalized physiotherapy and rehabilitation services in the comfort of your home. Our goal is to help individuals regain mobility, reduce pain, improve function, and achieve a better quality of life through evidence-based physiotherapy treatments.</p>
                    <ul>
                        <li>Personalized Home-Based Care</li>
                        <li>Experienced Physiotherapists</li>
                        <li>One-on-One Treatment Sessions</li>
                        <li>Customized Recovery Plans</li>
                        <li>Convenient Home Visits</li>
                        <li>Compassionate Patient Support</li>
                    </ul>
                </div>
            </div>
        </section>

    );

}

export default About;
