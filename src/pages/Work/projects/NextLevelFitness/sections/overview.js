import "../../sections.scss";
import { Element } from "react-scroll";

export const NLFOverview = (props) => {
    return (
        <Element id="overview" name="overview">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">overview</h4>
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
                        {props ? props.overview.problem : null}
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
                    <p className="tab-section__content--desc">
                        {props ? props.overview.solution[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.solution[1] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="get notifications"
                    src={props ? props.images.solution1 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solution[2] : null}</h5>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.solution[3] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="assistance finding a workout"
                    src={props ? props.images.solution2 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solution[4] : null}</h5>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.solution[5] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="choose specific workout"
                    src={props ? props.images.solution3 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solution[6] : null}</h5>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.solution[7] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="available workout options"
                    src={props ? props.images.solution4 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solution[8] : null}</h5>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.solution[9] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="begin your workout"
                    src={props ? props.images.solution5 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <h5>{props ? props.overview.solution[10] : null}</h5>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.solution[11] : null}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default NLFOverview;
