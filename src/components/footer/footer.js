import "./footer.scss";
import resume from "../../assets/files/MiaLewisResume.pdf";

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer__container">
                <ul className="footer__links">
                    <li>
                        <a
                            href={resume}
                            alt='Download Mia"s Resume'
                            replace="true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-regular fa-file-lines footer__icon"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/mia-lewis"
                            replace="true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin-in footer__icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__credit">
                <p>&copy; 2023 by Mia Lewis. Proudly built by Eric.</p>
            </div>
        </footer>
    );
}
