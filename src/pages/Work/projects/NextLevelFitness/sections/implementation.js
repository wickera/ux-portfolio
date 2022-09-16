import "../../sections.scss";
import { Element } from "react-scroll";

export const NLFImplementation = (props) => {
    return (
        <Element id="implementation" name="implementation">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    validation usability test #1
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.validation[0] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.validation[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.validation[2] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    THESE WERE SOME MAJOR KEY FINDINGS OF OPPORTUNITIES
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.opportunities[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.opportunities[1] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.opportunities[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.opportunities[3] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.opportunities[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.opportunities[5] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.opportunities[6] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.opportunities[7] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    THESE WERE SOME MAJOR KEY FINDINGS OF SUCCESS
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.success[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[1] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.success[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[3] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.success[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.success[5] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    1st iteration &amp; hi-fidelity mockups
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.mockups[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.mockups[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.mockups[2] : null}
                        <br></br>
                        {props ? props.implementation.mockups[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.mockups[4] : null}
                        <br></br>
                        {props ? props.implementation.mockups[5] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.mockups[6] : null}
                        <br></br>
                        {props ? props.implementation.mockups[7] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.hifi1 : null}
                    className="tab-section__content--img"
                />
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.hifi2 : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key insights
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.insights[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.insights[1] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.additions[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.additions[1] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.hifinewflows : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">usability test #2</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.usability[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.usability[1] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props ? props.implementation.usability[2] : null}
                        </li>
                        <li>
                            {props ? props.implementation.usability[3] : null}
                        </li>
                        <li>
                            {props ? props.implementation.usability[4] : null}
                        </li>
                    </ul>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.usability[5] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.usability[6] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key findings of opportunities
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props
                            ? props.implementation.majorOpportunities[0]
                            : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props
                            ? props.implementation.majorOpportunities[1]
                            : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props
                            ? props.implementation.majorOpportunities[2]
                            : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props
                            ? props.implementation.majorOpportunities[3]
                            : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props
                            ? props.implementation.majorOpportunities[4]
                            : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props
                            ? props.implementation.majorOpportunities[5]
                            : null}
                    </p>
                </div>
            </div>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key findings of success
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.majorSuccess[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.majorSuccess[1] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.majorSuccess[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.majorSuccess[3] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.majorSuccess[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.majorSuccess[5] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key insights
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.majorInsights[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.majorInsights[1] : null}
                        <br></br>
                        {props ? props.implementation.majorInsights[2] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.implementation.majorInsights[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.majorInsights[4] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">2nd iteration</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.iteration[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.iteration[1] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.ndhifimocks : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--desc">
                        1. {props ? props.implementation.iteration[2] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full column">
                <img
                    alt="Solution #2"
                    src={props ? props.images.ndhifimocks2 : null}
                    className="tab-section__content--img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--desc">
                        2. {props ? props.implementation.iteration[3] : null}
                        <br></br>
                        <br></br>
                        3. {props ? props.implementation.iteration[4] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full column">
                <img
                    alt="Solution #2"
                    src={props ? props.images.ndhifimocks3 : null}
                    className="tab-section__content--img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--desc">
                        4. {props ? props.implementation.iteration[5] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">final iteration</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.implementation.finalIteration[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.finalIteration[1] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>
                            {props
                                ? props.implementation.finalIteration[2]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.finalIteration[3]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.finalIteration[4]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.finalIteration[5]
                                : null}
                        </li>
                        <li>
                            {props
                                ? props.implementation.finalIteration[6]
                                : null}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="tab-section__full center column">
                <img
                    alt=""
                    src={props ? props.images.Prototype : null}
                    className="tab-section__content--row-img"
                />
                <a
                    href="https://www.figma.com/proto/9mcV5T6nsMwYQUknDAIhMa/Next-Level-Wireframes?page-id=0%3A1&node-id=24%3A178&viewport=173%2C-176%2C0.03&scaling=scale-down&starting-point-node-id=24%3A178&show-proto-sidebar=1"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="tab-section__full--button">
                        View Clickable Prototype
                    </button>
                </a>
            </div>
        </Element>
    );
};

export default NLFImplementation;
