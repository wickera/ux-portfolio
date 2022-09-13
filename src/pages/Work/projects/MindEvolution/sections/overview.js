import "../../sections.scss";
import { Element } from "react-scroll";

export const MEOverview = (props) => {
    return (
        <Element id="overview" name="overview">
            <div className="tab-section">
                <h4 className="tab-section__title">Overview</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.overview.objective.main[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.objective.main[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.objective.main[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.objective.main[3] : null}
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
                        {props ? props.overview.problem[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.problem[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.problem[2] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section">
                <h4 className="tab-section__title">the goal</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.overview.goal : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">the solution</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.overview.solutions[0] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Solution1 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solutions[1] : null}</h5>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[4] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[5] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Solution2 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solutions[6] : null}</h5>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[7] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[8] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[9] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[10] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Solution3 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solutions[11] : null}</h5>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[12] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[13] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Solution4 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solutions[14] : null}</h5>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[15] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[16] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[17] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Solution5 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solutions[18] : null}</h5>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[19] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[20] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Solution6 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solutions[21] : null}</h5>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[22] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[23] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        &#187; {props ? props.overview.solutions[24] : null}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default MEOverview;
