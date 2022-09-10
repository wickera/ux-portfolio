import "../../sections.scss";
import { Element } from "react-scroll";

export const RFCIdeation = (props) => {
    return (
        <Element id="ideation" name="ideation">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    user flows &amp; information architecture
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.ideation.architecture[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.architecture[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.architecture[2] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="user flows"
                    src={props ? props.images.userflow : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">wireframes</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.ideation.wireframes[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.wireframes[1] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.ideation.wireframes[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.wireframes[3] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="condensed dashboard"
                    src={props ? props.images.maindashboard : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc left">
                    <p className="tab-section__content--title">
                        {props ? props.ideation.wireframes[4] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.ideation.wireframes[5] : null}</li>
                        <li>{props ? props.ideation.wireframes[6] : null}</li>
                    </ul>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.wireframes[7] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.ideation.wireframes[8] : null}</li>
                        <li>{props ? props.ideation.wireframes[9] : null}</li>
                        <ul className="tab-section__content--desc tab-section__content--desc--list">
                            <li>
                                {props ? props.ideation.wireframes[10] : null}
                            </li>
                            <li>
                                {props ? props.ideation.wireframes[11] : null}
                            </li>
                            <li>
                                {props ? props.ideation.wireframes[12] : null}
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="summarized profits"
                    src={props ? props.images.MonthlyProfit2 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc left">
                    <p className="tab-section__content--title">
                        {props ? props.ideation.wireframes[13] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.ideation.wireframes[14] : null}</li>
                        <ul className="tab-section__content--desc tab-section__content--desc--list">
                            <li>
                                {props ? props.ideation.wireframes[15] : null}
                            </li>
                            <li>
                                {props ? props.ideation.wireframes[16] : null}
                            </li>
                            <li>
                                {props ? props.ideation.wireframes[17] : null}
                            </li>
                            <li>
                                {props ? props.ideation.wireframes[18] : null}
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="planning for your financial future"
                    src={props ? props.images.MonthlyGoal2 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc left">
                    <p className="tab-section__content--title">
                        {props ? props.ideation.wireframes[19] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.ideation.wireframes[20] : null}</li>
                        <ul className="tab-section__content--desc tab-section__content--desc--list">
                            <li>
                                {props ? props.ideation.wireframes[21] : null}
                            </li>
                            <li>
                                {props ? props.ideation.wireframes[22] : null}
                            </li>
                            <li>
                                {props ? props.ideation.wireframes[23] : null}
                            </li>
                            <li>
                                {props ? props.ideation.wireframes[24] : null}
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.designs : null}
                    className="tab-section__content--img"
                />
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.wireflows2 : null}
                    className="tab-section__content--img"
                />
            </div>
        </Element>
    );
};

export default RFCIdeation;
