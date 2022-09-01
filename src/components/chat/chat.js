import "./chat.scss";
import { Link } from "react-router-dom";

export default function Chat() {
    return (
        <div className="chat">
            <h4 className="chat__title">Let's connect.</h4>
            <Link to="/contact" replace="true" className="chat__button">
                Contact
            </Link>
        </div>
    );
}
