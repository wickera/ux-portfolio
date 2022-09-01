import "../../sections.scss";
import { Element } from "react-scroll";

export const CPOverview = (props) => {
    return (
        <Element id="overview" name="overview">
            <div className="tab-section">
                <h4 className="tab-section__title">the objective</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.overview.objective.main : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <span>My Role</span>
                        <br></br>
                        <span>
                            {props ? props.overview.objective.role : null}
                        </span>
                    </p>
                    <div className="tab-section__content--info">
                        <div>
                            <p>Timeline</p>
                            <p>
                                {props
                                    ? props.overview.objective.timeline
                                    : null}
                            </p>
                        </div>
                        <div>
                            <p>Project Type</p>
                            <p>
                                {props
                                    ? props.overview.objective.projectType
                                    : null}
                            </p>
                        </div>
                        <div>
                            <p>Tools Used</p>
                            <p>
                                {props ? props.overview.objective.tools : null}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">the problem</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.overview.problem.main : null}
                    </p>
                </div>
            </div>
            <div className="tab-section">
                <h4 className="tab-section__title">the goal</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.overview.goal.main : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section column">
                <h4 className="tab-section__title">the solution</h4>
                <div className="tab-section__full">
                    <img
                        alt="Solution #1"
                        src={props ? props.images.Mockup1 : null}
                        className="tab-section__img"
                    />
                    <div className="tab-section__full--desc">
                        <h5>Mockup #1</h5>
                        <p>
                            Donec sollicitudin molestie malesuada. Mauris
                            blandit aliquet elit, eget tincidunt nibh pulvinar
                            a. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui.
                        </p>
                    </div>
                </div>
                <div className="tab-section__full row-reverse">
                    <img
                        alt="Solution #2"
                        src={props ? props.images.Mockup2 : null}
                        className="tab-section__img"
                    />
                    <div className="tab-section__full--desc">
                        <h5>Mockup #2</h5>
                        <p>
                            Donec sollicitudin molestie malesuada. Mauris
                            blandit aliquet elit, eget tincidunt nibh pulvinar
                            a. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui.
                        </p>
                    </div>
                </div>
                <div className="tab-section__full">
                    <img
                        alt="Solution #3"
                        src={props ? props.images.Mockup3 : null}
                        className="tab-section__img"
                    />
                    <div className="tab-section__full--desc">
                        <h5>Mockup #3</h5>
                        <p>
                            Donec sollicitudin molestie malesuada. Mauris
                            blandit aliquet elit, eget tincidunt nibh pulvinar
                            a. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui.
                        </p>
                    </div>
                </div>
                <div className="tab-section__full row-reverse">
                    <img
                        alt="Solution #4"
                        src={props ? props.images.Mockup4 : null}
                        className="tab-section__img"
                    />
                    <div className="tab-section__full--desc">
                        <h5>Mockup #4</h5>
                        <p>
                            Donec sollicitudin molestie malesuada. Mauris
                            blandit aliquet elit, eget tincidunt nibh pulvinar
                            a. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default CPOverview;
