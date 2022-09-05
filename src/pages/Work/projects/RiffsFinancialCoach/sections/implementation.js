import "../../sections.scss";
import { Element } from "react-scroll";

export const RFCImplementation = (props) => {
    return (
        <Element id="implementation" name="implementation">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">usability testing</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.testing[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.testing[1] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.testing[2] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props ? props.implementation.testing[3] : null}
                        </li>
                        <li>
                            {props ? props.implementation.testing[4] : null}
                        </li>
                        <li>
                            {props ? props.implementation.testing[5] : null}
                        </li>
                    </ul>
                    <br></br>

                    <p className="tab-section__content--desc">
                        {props ? props.implementation.testing[6] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props ? props.implementation.testing[7] : null}
                        </li>
                        <li>
                            {props ? props.implementation.testing[8] : null}
                        </li>
                        <li>
                            {props ? props.implementation.testing[9] : null}
                        </li>
                        <li>
                            {props ? props.implementation.testing[10] : null}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="zoom call user test"
                    src={props ? props.images.testing : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key findings of opportunities
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.opportunities[0] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">Habits</p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props
                                ? props.implementation.opportunities[1]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.opportunities[2]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.opportunities[3]
                                : null}
                        </li>
                    </ul>
                    <br></br>
                    <p className="tab-section__content--title">Budget</p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props
                                ? props.implementation.opportunities[4]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.opportunities[5]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.opportunities[6]
                                : null}
                        </li>
                    </ul>
                    <br></br>
                    <p className="tab-section__content--title">Revenue</p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props
                                ? props.implementation.opportunities[7]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.opportunities[8]
                                : null}
                        </li>
                    </ul>
                    <br></br>
                    <p className="tab-section__content--title">
                        additional funds
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props
                                ? props.implementation.opportunities[9]
                                : null}
                        </li>
                    </ul>
                    <br></br>
                    <p className="tab-section__content--title">
                        profit/grow profit
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props
                                ? props.implementation.opportunities[10]
                                : null}
                        </li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key findings of success
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[0] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.success[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[2] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.success[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[4] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.success[5] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[6] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.success[7] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[8] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.success[9] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[10] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section__full">
                <div className="tab-section_content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.quotes[0] : null}
                    </p>
                    <p className="tab-section__content--desc">-Participant 1</p>
                    <br></br>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.quotes[1] : null}
                    </p>
                    <p className="tab-section__content--desc">-Participant 2</p>
                    <br></br>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.quotes[2] : null}
                    </p>
                    <p className="tab-section__content--desc">-Participant 3</p>
                    <br></br>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.quotes[3] : null}
                    </p>
                    <p className="tab-section__content--desc">-Participant 4</p>
                    <br></br>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.quotes[4] : null}
                    </p>
                    <p className="tab-section__content--desc">-Participant 5</p>
                    <br></br>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.quotes[5] : null}
                    </p>
                    <p className="tab-section__content--desc">-Participant 1</p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    2nd iteration &amp; key changes
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.iteration[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.iteration[1] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.changes[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[1] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.changes[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[3] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.changes[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[5] : null}
                    </p>
                    <br></br>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.changes[6] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[7] : null}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default RFCImplementation;
