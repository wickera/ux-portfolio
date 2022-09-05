import "../../sections.scss";
import { Element } from "react-scroll";

export const NLFResearch = (props) => {
    return (
        <Element id="research" name="research">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">the process</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.process[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.process[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.process[2] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="process chart"
                    src={props ? props.images.processchart : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">the discovery</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.discovery[0] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.research.discovery[1] : null}</li>
                        <li>{props ? props.research.discovery[2] : null}</li>
                        <li>{props ? props.research.discovery[3] : null}</li>
                        <li>{props ? props.research.discovery[4] : null}</li>
                        <li>{props ? props.research.discovery[5] : null}</li>
                        <li>{props ? props.research.discovery[6] : null}</li>
                        <li>{props ? props.research.discovery[7] : null}</li>
                        <li>{props ? props.research.discovery[8] : null}</li>
                    </ul>
                    <p className="tab-section__content--desc">
                        {props ? props.research.discovery[9] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">research plans</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.plans[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.plans[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.plans[2] : null}
                        <br></br>
                        1. {props ? props.research.plans[3] : null}
                        <br></br>
                        2. {props ? props.research.plans[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.plans[5] : null}
                        <br></br>
                        1. {props ? props.research.plans[6] : null}
                        <br></br>
                        2. {props ? props.research.plans[7] : null}
                        <br></br>
                        3. {props ? props.research.plans[8] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">research</h4>
                <div className="tab-section__content">
                    <h5 className="tab-section__content--title">
                        {props ? props.research.research[0] : null}
                    </h5>
                    <p className="tab-section__content--desc">
                        {props ? props.research.research[1] : null}
                    </p>
                    <ul className="tab-section__content--desc--list">
                        <li className="tab-section__content--desc">
                            {props ? props.research.research[2] : null}
                        </li>
                        <li className="tab-section__content--desc">
                            {props ? props.research.research[3] : null}
                        </li>
                        <li className="tab-section__content--desc">
                            {props ? props.research.research[4] : null}
                        </li>
                        <li className="tab-section__content--desc">
                            {props ? props.research.research[5] : null}
                        </li>
                    </ul>
                    <p className="tab-section__content--desc">
                        {props ? props.research.research[6] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">challenge</h4>
                <div className="tab-section__content">
                    <h5 className="tab-section__content--title">
                        {props ? props.research.challenge[0] : null}
                    </h5>
                    <p className="tab-section__content--desc">
                        {props ? props.research.challenge[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.challenge[2] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key findings
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.findings[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.findings[1] : null} -{" "}
                        {props ? props.research.findings[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.findings[3] : null} -{" "}
                        {props ? props.research.findings[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.findings[5] : null} -{" "}
                        {props ? props.research.findings[6] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.findings[7] : null} -{" "}
                        {props ? props.research.findings[8] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.findings[9] : null} -{" "}
                        {props ? props.research.findings[10] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.findings[11] : null} -{" "}
                        {props ? props.research.findings[12] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key insights
                </h4>
                <div className="tab-section__content">
                    <h5 className="tab-section__content--title">
                        {props ? props.research.insights[0] : null}
                    </h5>
                    <p className="tab-section__content--desc">
                        {props ? props.research.insights[1] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="insights chart"
                    src={props ? props.images.Insightschart : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">user interviews</h4>
                <div className="tab-section__content">
                    <h5 className="tab-section__content--title">
                        {props ? props.research.interviews[0] : null}
                    </h5>
                    <p className="tab-section__content--desc">
                        {props ? props.research.interviews[1] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="insights chart"
                    src={props ? props.images.userinterviewchart : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key findings
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.majorFindings[0] : null}{" "}
                        <br></br>
                        {props ? props.research.majorFindings[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.majorFindings[2] : null}{" "}
                        <br></br>
                        {props ? props.research.majorFindings[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.majorFindings[4] : null}{" "}
                        <br></br>
                        {props ? props.research.majorFindings[5] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="insights chart"
                    src={props ? props.images.Insightschart : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section__full">
                <p className="tab-section__content--desc">
                    {props ? props.research.quotes[0] : null}
                    <br></br>
                    <span className="tab-section__content--title">
                        {props ? props.research.quotes[1] : null}
                    </span>
                </p>
            </div>
            <div className="tab-section__full">
                <p className="tab-section__content--desc">
                    {props ? props.research.quotes[2] : null}
                    <br></br>
                    <span className="tab-section__content--title">
                        {props ? props.research.quotes[3] : null}
                    </span>
                </p>
            </div>
            <div className="tab-section__full">
                <p className="tab-section__content--desc">
                    {props ? props.research.quotes[4] : null}
                    <br></br>
                    <span className="tab-section__content--title">
                        {props ? props.research.quotes[5] : null}
                    </span>
                </p>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key insights
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.research.majorInsights[0] : null}{" "}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.research.majorInsights[1] : null}{" "}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default NLFResearch;
