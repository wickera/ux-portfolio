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
                    <img
                        alt="City Pups mock up"
                        src={props ? props.images.Mockup1 : null}
                        className="tab-section__content--img"
                    />
                </div>
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
                    <img
                        alt="testing"
                        src={props ? props.images.testing : null}
                        className="tab-section__content--img"
                    />
                </div>
            </div>
            <hr></hr>

            <div className="tab-section">
                <h4 className="tab-section__title">
                    major key findings &amp; changes
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc ">
                        <h5 className="tab-section__content--title">
                            Add more Questions
                        </h5>
                        {props ? props.implementation.findings[0] : null}
                    </p>
                    <p className="tab-section__content--desc ">
                        <h5 className="tab-section__content--title">
                            Eliminate specific categories
                        </h5>
                        {props ? props.implementation.findings[1] : null}
                    </p>
                    <p className="tab-section__content--desc ">
                        <h5 className="tab-section__content--title">
                            unsure of adopting a dog
                        </h5>
                        {props ? props.implementation.findings[2] : null}
                    </p>
                    <p className="tab-section__content--desc ">
                        <h5 className="tab-section__content--title">
                            remove detailed dropdown
                        </h5>
                        {props ? props.implementation.findings[3] : null}
                    </p>

                    <h5 className="tab-section__content--title">
                        {props ? props.implementation.findings[4] : null}
                    </h5>
                    <div className="tab-section__full">
                        <div className="tab-section__full--desc">
                            <span>Before Usability Testing</span>
                            <img
                                alt="Home Before Usability Testing"
                                src={
                                    props
                                        ? props.images.Homebeforetesting
                                        : null
                                }
                                className="tab-section__content--img"
                            />
                        </div>
                        <div className="tab-section__full--desc">
                            <span>After Usability Testing</span>
                            <img
                                alt="Home After Usability Testing"
                                src={
                                    props ? props.images.Homeaftertesting : null
                                }
                                className="tab-section__content--img"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="tab-section__content--desc">
                            {props ? props.implementation.findings[5] : null}
                            <br></br>
                            {props ? props.implementation.findings[6] : null}
                            <br></br>
                            {props ? props.implementation.findings[7] : null}
                        </p>
                    </div>

                    <h5 className="tab-section__content--title">
                        {props ? props.implementation.findings[4] : null}
                    </h5>
                    <div className="tab-section__full">
                        <div className="tab-section__full--desc">
                            <span>Before Usability Testing</span>
                            <img
                                alt="Home Before Usability Testing"
                                src={props ? props.images.Resultsbefore : null}
                                className="tab-section__content--img"
                            />
                        </div>
                        <div className="tab-section__full--desc">
                            <span>After Usability Testing</span>
                            <img
                                alt="Home After Usability Testing"
                                src={props ? props.images.Resultsafter : null}
                                className="tab-section__content--img"
                            />
                        </div>
                    </div>
                    <div>
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
                    <h5 className="tab-section__content--title">
                        {props ? props.implementation.findings[4] : null}
                    </h5>
                    <div className="tab-section__full">
                        <div className="tab-section__full--desc">
                            <span>Before Usability Testing</span>
                            <img
                                alt="Home Before Usability Testing"
                                src={props ? props.images.Profilebefore : null}
                                className="tab-section__content--img"
                            />
                        </div>
                        <div className="tab-section__full--desc">
                            <span>After Usability Testing</span>
                            <img
                                alt="Home After Usability Testing"
                                src={props ? props.images.Profileafter : null}
                                className="tab-section__content--img"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="tab-section__content--desc">
                            {props ? props.implementation.findings[5] : null}
                            <br></br>
                            {props ? props.implementation.findings[6] : null}
                            <br></br>
                            {props ? props.implementation.findings[7] : null}
                        </p>
                    </div>
                </div>
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
