import "../../sections.scss";
import { Element } from "react-scroll";

export const RFCConclusion = (props) => {
    return (
        <Element id="conclusion" name="conclusion">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">conclusion</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.conclusion.conclusion[0] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.conclusion.conclusion[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.conclusion[2] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.conclusion.conclusion[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.conclusion[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.conclusion[5] : null}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default RFCConclusion;
