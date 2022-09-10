import "../../sections.scss";
import { Element } from "react-scroll";

export const MEConclusion = (props) => {
    return (
        <Element id="conclusion" name="conclusion">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">conclusion</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Lessons learned
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.main[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.conclusion.main[1] : null}</b>
                        <br></br>
                        {props ? props.conclusion.main[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.conclusion.main[3] : null}</b>
                        <br></br>
                        {props ? props.conclusion.main[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.conclusion.main[5] : null}</b>
                        <br></br>
                        {props ? props.conclusion.main[6] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.conclusion.main[7] : null}</b>
                        <br></br>
                        {props ? props.conclusion.main[8] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.conclusion.main[9] : null}</b>
                        <br></br>
                        {props ? props.conclusion.main[10] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">outcomes</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.outcomes[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.conclusion.outcomes[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.conclusion.outcomes[2] : null}</b>

                        <br></br>
                        {props ? props.conclusion.outcomes[3] : null}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default MEConclusion;
