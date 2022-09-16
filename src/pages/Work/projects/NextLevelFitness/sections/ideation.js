import "../../sections.scss";
import { Element } from "react-scroll";

export const NLFIdeation = (props) => {
    return (
        <Element id="ideation" name="ideation">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">design</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.ideation.design[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.design[1] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">challenge</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.ideation.challenge[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.challenge[1] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">information architecture</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Three Major Flows
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.ideation.architecture[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.architecture[2] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.ideation.architecture[3] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.ideation.architecture[4] : null}</li>
                    </ul>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.ideation.architecture[5] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.ideation.architecture[6] : null}</li>
                    </ul>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.ideation.architecture[7] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.ideation.architecture[8] : null}</li>
                        <li>{props ? props.ideation.architecture[9] : null}</li>
                    </ul>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.architecture[10] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.AffinityandUserFlows : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">wireframes</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.wireframes[0] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li> {props ? props.ideation.wireframes[1] : null}</li>
                        <li> {props ? props.ideation.wireframes[2] : null}</li>
                        <li> {props ? props.ideation.wireframes[3] : null}</li>
                    </ul>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Wireframes3 : null}
                    className="tab-section__content--med-img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.wireframes[4] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Wireframes2 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.wireframes[5] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.wireframes[6] : null}
                    </p>
                </div>
                <img
                    alt="Solution #2"
                    src={props ? props.images.Wireframes1 : null}
                    className="tab-section__content--med-img"
                />
            </div>
        </Element>
    );
};

export default NLFIdeation;
