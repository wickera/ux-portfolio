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
                        <span>
                            <b>My Role</b>
                        </span>
                        <br></br>
                        <span>
                            {props ? props.overview.objective.role : null}
                        </span>
                    </p>
                    <div className="tab-section__content--info">
                        <div>
                            <p>
                                <b>Timeline</b>
                            </p>
                            <p>
                                {props
                                    ? props.overview.objective.timeline
                                    : null}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>Project Type</b>
                            </p>
                            <p>
                                {props
                                    ? props.overview.objective.projectType
                                    : null}
                            </p>
                        </div>
                        <div>
                            <p>
                                <b>Tools Used</b>
                            </p>
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
                    <p className="tab-section__content--title">
                        people who live in cities struggle to find the perfect
                        dog to adopt
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.problem.main : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Design Sprint sticky note map"
                    src={props ? props.images.DesignSprintGraphic : null}
                    className="tab-section__content--img"
                />
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
            <div className="tab-section">
                <h4 className="tab-section__title">the solution</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Find your match assessment to narrow down the search to
                        find the perfect dog to adopt
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #1"
                    src={props ? props.images.Mockup1 : null}
                    className="tab-section__img"
                />
                <div
                    className="tab-section__full--desc"
                    style={{ width: "20rem" }}
                >
                    <h5>Find Your Match</h5>
                    <p>
                        Take an assessment to find the dog that aligns with your
                        needs.
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Mockup2 : null}
                    className="tab-section__img"
                />
                <div
                    className="tab-section__full--desc"
                    style={{ width: "20rem" }}
                >
                    <h5>Take Assessment</h5>
                    <p>
                        Answer questions more specific to your needs to narrow
                        down your results.
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #3"
                    src={props ? props.images.Mockup3 : null}
                    className="tab-section__img"
                />
                <div
                    className="tab-section__full--desc"
                    style={{ width: "20rem" }}
                >
                    <h5>View the Results</h5>
                    <p>
                        See your assessment results and narrow your results
                        using the filter.
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #4"
                    src={props ? props.images.Mockup4 : null}
                    className="tab-section__img"
                />
                <div
                    className="tab-section__full--desc"
                    style={{ width: "20rem" }}
                >
                    <h5>Get to Know the Pups' Interests</h5>
                    <p>
                        Read a detailed description of a dog and choose the
                        option to adopt to take your process to the next level
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default CPOverview;
