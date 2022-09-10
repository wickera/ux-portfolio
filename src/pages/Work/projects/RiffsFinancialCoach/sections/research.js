import "../../sections.scss";
import { Element } from "react-scroll";

export const RFCResearch = (props) => {
    return (
        <Element id="research" name="research">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">the process</h4>
                <div className="tab-section__content"></div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Process Diagram"
                    src={props ? props.images.RiffProcessChart : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">research</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.research.research[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.research[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.research[2] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.research.research[3] : null}</li>
                        <li>{props ? props.research.research[4] : null}</li>
                        <li>{props ? props.research.research[5] : null}</li>
                        <li>{props ? props.research.research[6] : null}</li>
                        <li>{props ? props.research.research[7] : null}</li>
                        <li>{props ? props.research.research[8] : null}</li>
                    </ul>
                    <p className="tab-section__content--desc">
                        {props ? props.research.research[9] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.research[10] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.researchImages : null}
                    className="tab-section__content--img"
                />
            </div>
        </Element>
    );
};

export default RFCResearch;
