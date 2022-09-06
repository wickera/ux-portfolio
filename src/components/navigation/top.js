import "./top.scss";
import { animateScroll } from "react-scroll";

export default function Top() {
    const goToTop = () => {
        animateScroll.scrollToTop();
    };

    return (
        <button onClick={goToTop} className="top">
            <i className="fa-sharp fa-solid fa-arrow-up"></i>
        </button>
    );
}
