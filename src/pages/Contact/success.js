import "./contact.scss";
export default function Success() {
    return (
        <div className="contact__success">
            <h4 className="contact__success--title">
                Email Successfully Sent!
            </h4>
            <p className="contact__success--message">
                Thank you for sending me a message! I'll typically respond
                within 24-48hr.
            </p>
        </div>
    );
}
