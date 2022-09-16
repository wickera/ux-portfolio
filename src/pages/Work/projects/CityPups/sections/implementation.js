import "../../sections.scss";
import { Element } from "react-scroll";

export const CPImplementation = (props) => {
    return (
        <Element id="implementation" name="implementation">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">day four: prototype</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.prototype[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.prototype[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.prototype[2] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full column">
                <img
                    alt="City Pups mock up"
                    src={props ? props.images.Mockup1 : null}
                    className="tab-section__content--img center"
                />
                <a
                    href="https://www.figma.com/proto/dKae9TBofYPrrH8CXRyN77/CityPups-Design-Sprint?page-id=5%3A38&node-id=5%3A39&viewport=241%2C48%2C0.02&scaling=scale-down&starting-point-node-id=5%3A39"
                    target="_blank"
                    rel="noreferrer"
                    className="center text"
                >
                    <button className="tab-section__full--button">
                        View Clickable Prototype
                    </button>
                </a>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">day five: test</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.test[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.test[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.test[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.test[3] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    major key findings &amp; changes
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Add more Questions
                    </p>
                    <p className="tab-section__content--desc ">
                        {props ? props.implementation.findings[0] : null}
                    </p>
                    <p className="tab-section__content--title">
                        Eliminate specific categories
                    </p>
                    <p className="tab-section__content--desc ">
                        {props ? props.implementation.findings[1] : null}
                    </p>
                    <p className="tab-section__content--title">
                        unsure of adopting a dog
                    </p>
                    <p className="tab-section__content--desc ">
                        {props ? props.implementation.findings[2] : null}
                    </p>
                    <p className="tab-section__content--title">
                        remove detailed dropdown
                    </p>
                    <p className="tab-section__content--desc ">
                        {props ? props.implementation.findings[3] : null}
                    </p>
                </div>
            </div>
            <p className="tab-section__content--title center">
                One Main change for the home screen
            </p>
            <div className="tab-section__full">
                <img
                    alt="Home Before Usability Testing"
                    src={props ? props.images.Homebeforetesting : null}
                    className="tab-section__content--row-img"
                />
                <p className="tab-section__content--title">
                    Before Usability Testing
                </p>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Home After Usability Testing"
                    src={props ? props.images.Homeaftertesting : null}
                    className="tab-section__content--row-img"
                />
                <p className="tab-section__content--title">
                    After Usability Testing
                </p>
            </div>
            <p className="tab-section__content--title center">
                I changed the statement from "Find" to "Adopt"
            </p>
            <p className="tab-section__content--title center">
                Changed Results Screen layout
            </p>
            <div className="tab-section__full">
                <img
                    alt="Home Before Usability Testing"
                    src={props ? props.images.Resultsbefore : null}
                    className="tab-section__content--row-img"
                />
                <p className="tab-section__content--title">
                    Before Usability Testing
                </p>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Home After Usability Testing"
                    src={props ? props.images.Resultsafter : null}
                    className="tab-section__content--row-img"
                />
                <p className="tab-section__content--title">
                    After Usability Testing
                </p>
            </div>
            <div className="tab-section__full center">
                <p className="tab-section__content--desc">
                    {props ? props.implementation.findings[5] : null}
                    <br></br>
                    {props ? props.implementation.findings[6] : null}
                    <br></br>
                    {props ? props.implementation.findings[7] : null}
                </p>
            </div>
            <p className="tab-section__content--title center">
                changed profile screen layout
            </p>
            <div className="tab-section__full">
                <img
                    alt="Home Before Usability Testing"
                    src={props ? props.images.Profilebefore : null}
                    className="tab-section__content--row-img"
                />
                <p className="tab-section__content--title">
                    Before Usability Testing
                </p>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Home After Usability Testing"
                    src={props ? props.images.Profileafter : null}
                    className="tab-section__content--row-img"
                />
                <p className="tab-section__content--title">
                    After Usability Testing
                </p>
            </div>
            <div className="tab-section__full center">
                <p className="tab-section__content--desc">
                    {props ? props.implementation.findings[8] : null}
                    <br></br>
                    {props ? props.implementation.findings[9] : null}
                    <br></br>
                    {props ? props.implementation.findings[10] : null}
                    <br></br>
                    {props ? props.implementation.findings[11] : null}
                </p>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">challenge</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.challenge : null}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default CPImplementation;
