// components/Resume.js
import styles from './Resume.module.css';


const Resume = () => {
    return (
        <div className={styles.container}>
            {/* Header Section */}
            <header className={styles.headerContent}>
                <h1>Amanda Helmer</h1>
                <p>Business Administrator | Project Manager</p>
                <nav>
                    <ul className={styles.nav}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* About Section */}
            <section id="about" className={styles.section}>
                <h2>About Me</h2>
                <p>I am a motivated Business Administration professional with 10+ years of customer service and project
                    management experience. Currently pursuing a Bachelor of Science in Business Administration at Purdue
                    University Global, I have a passion for analytical thinking and leadership.</p>
            </section>

            {/* Experience Section */}
            <section id="experience" className={styles.section}>
                <h2>Experience</h2>
                <div className={styles.job}>
                    <h3>Crisis Text Line | Counselor</h3>
                    <p><em>2023 - Present</em></p>
                    <ul>
                        <li>Provide crisis intervention to individuals in distress.</li>
                        <li>Assess crisis situations for immediate risk and develop safety plans.</li>
                    </ul>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className={styles.section}>
                <h2>Education</h2>
                <div className={styles.education}>
                    <h3>Bachelor of Science in Business Administration | Project Management</h3>
                    <p>Purdue University Global | 2023-2026</p>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className={styles.section}>
                <h2>Skills</h2>
                <ul>
                    <li>Leadership & Team Management</li>
                    <li>Project Management</li>
                    <li>Data Analysis & Reporting</li>
                </ul>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.section}>
                <h2>Contact</h2>
                <p>Email: <a href="mailto:ahelmer@mail.com">ahelmer@mail.com</a></p>
                <p>Phone: 669.289.6969</p>

                <div className={styles.ctaWrapper}>
                    <Link href="/AMANDA_HELMER_Resume.html" passHref>
                        <a className={styles.ctaBtn} download>Download Resume</a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/helmera" passHref>
                        <a className={styles.ctaBtn} target="_blank">Visit LinkedIn</a>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2024 Amanda Helmer | <a href="https://www.linkedin.com/in/helmera">LinkedIn</a></p>
            </footer>
        </div>
    );
};

export default Resume;
