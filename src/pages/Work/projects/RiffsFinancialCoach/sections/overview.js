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
                <h4 className="tab-section__title">project plan</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.overview.project[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.overview.project[1] : null}</b>
                        <br></br>
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
                    <p className="tab-section__content--title">
                        Want users to feel in control of their finances
                    </p>
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
                    alt="Dashboard"
                    src={props ? props.images.NewDashboard : null}
                    className="tab-section__content--img"
                />
            </div>
            <div className="tab-section__full">
                <img
                    alt="Budget Dashboard"
                    src={props ? props.images.NewBudget : null}
                    className="tab-section__content--row-img"
                />
                <img
                    alt="Payment Dashboard"
                    src={props ? props.images.NewPayments : null}
                    className="tab-section__content--row-img"
                />
                <img
                    alt="View your spending habits"
                    src={props ? props.images.newhabits : null}
                    className="tab-section__content--row-img"
                />
            </div>
            <div className="tab-section__full">
                <img
                    alt="Monthly Revenue Dashboard"
                    src={props ? props.images.NewMonthlyRevenue : null}
                    className="tab-section__content--row-img"
                />
                <img
                    alt="Monthly Profit Dashboard"
                    src={props ? props.images.NewMonthlyProfit : null}
                    className="tab-section__content--row-img"
                />
                <img
                    alt="View how to grow your profit"
                    src={props ? props.images.NewGrowProfit : null}
                    className="tab-section__content--row-img"
                />
            </div>
        </Element>
    );
};

export default RFCOverview;
