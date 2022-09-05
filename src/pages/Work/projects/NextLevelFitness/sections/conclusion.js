import "../../sections.scss";
import { Element } from "react-scroll";

export const NLFConclusion = (props) => {
    return (
        <Element id="conclusion" name="conclusion">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">conclusion</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.conclusion[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.conclusion[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.conclusion[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.conclusion[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.conclusion[4] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.conclusion.conclusion[5] : null}</li>
                        <li>{props ? props.conclusion.conclusion[6] : null}</li>
                        <li>{props ? props.conclusion.conclusion[7] : null}</li>
                    </ul>
                </div>
            </div>
        </Element>
    );
};

export default NLFConclusion;
