import "../../sections.scss";
import { Element } from "react-scroll";

export const CPResearch = (props) => {
    return (
        <Element id="research" name="research">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">the problem</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.problem : null}
                    </p>
                    <img
                        alt="Design Sprint sticky note map"
                        src={props ? props.images.DesignSprintGraphic : null}
                        className="tab-section__content--img"
                    />
                </div>
            </div>
            <hr></hr>

            <div className="tab-section">
                <h4 className="tab-section__title">
                    day one: understand &amp; map
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.understand : null}
                    </p>
                    <img
                        alt="User Interview Charts"
                        src={props ? props.images.Interviews : null}
                        className="tab-section__content--img"
                    />
                </div>
            </div>
            <hr></hr>

            <div className="tab-section">
                <h4 className="tab-section__title">affinity map</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.affinity : null}
                    </p>
                    <img
                        alt="Affinity Map"
                        src={props ? props.images.AffinityMap : null}
                        className="tab-section__content--img"
                    />
                </div>
            </div>
            <hr></hr>

            <div className="tab-section">
                <h4 className="tab-section__title">personas</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.personas : null}
                    </p>
                    <img
                        alt="Woman greeting white puppy"
                        src={props ? props.images.Ellie : null}
                        className="tab-section__content--img"
                    />
                </div>
            </div>
            <hr></hr>

            <div className="tab-section">
                <h4 className="tab-section__title">mapping</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.research.mapping : null}
                    </p>
                    <img
                        alt="User Flow Mapping"
                        src={props ? props.images.Userflowmapping : null}
                        className="tab-section__content--img"
                    />
                </div>
            </div>
        </Element>
    );
};

export default CPResearch;
