import "../../sections.scss";
import { Element } from "react-scroll";

export const CPConclusion = (props) => {
    return (
        <Element id="conclusion" name="conclusion">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">conclusion</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion[3] : null}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default CPConclusion;
