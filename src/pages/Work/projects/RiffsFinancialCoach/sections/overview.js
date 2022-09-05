import "../../sections.scss";
import { Element } from "react-scroll";

export const RFCOverview = (props) => {
    return (
        <Element id="overview" name="overview">
            <div className="tab-section">
                <h4 className="tab-section__title">overview</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.overview.objective.main[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.objective.main[1] : null}
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
                <h4 className="tab-section__title">project plan</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.overview.project[0] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.overview.project[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.project[2] : null}
                        <br></br>
                        {props ? props.overview.project[3] : null}
                        <br></br>
                        {props ? props.overview.project[4] : null}
                        <br></br>
                        {props ? props.overview.project[5] : null}
                        <br></br>
                        {props ? props.overview.project[6] : null}
                        <br></br>
                        {props ? props.overview.project[7] : null}
                        <br></br>
                        {props ? props.overview.project[8] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">the problem</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.overview.problem[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.problem[1] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.finance : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
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
                <h4 className="tab-section__title">the goal</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.overview.solution[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.overview.solution[2] : null}
                    </p>
                    <ul className="tab-section__content--desc tab-section__content--desc--list">
                        <li>{props ? props.overview.solution[3] : null}</li>
                        <li>{props ? props.overview.solution[4] : null}</li>
                        <li>{props ? props.overview.solution[5] : null}</li>
                    </ul>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.finance : null}
                    className="tab-section__content--img"
                />
            </div>
        </Element>
    );
};

export default RFCOverview;
