import "../../sections.scss";
import { Element } from "react-scroll";

export const MEImplementation = (props) => {
    return (
        <Element id="implementation" name="implementation">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">prototype &amp; Testing</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.prototype[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>
                            {props ? props.implementation.prototype[1] : null}
                        </b>
                        <br></br>
                        1. {props ? props.implementation.prototype[2] : null}
                        <br></br>
                        2. {props ? props.implementation.prototype[3] : null}
                        <br></br>
                        3. {props ? props.implementation.prototype[4] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full column">
                <img
                    alt="iPhone with mind evolution home page"
                    src={props ? props.images.Group353 : null}
                    className="tab-section__content--row-img"
                />
                <a
                    href="https://www.figma.com/proto/BkOSALuLpQzyBmETefWSCC/Wireframes?page-id=648%3A2923&node-id=648%3A3011&starting-point-node-id=648%3A3011"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className="tab-section__full--button">
                        View Clickable Prototype
                    </button>
                </a>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key findings
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        During the first round of usability testing, I
                        discovered 5 significant issues:
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.findings[0] : null}</b>
                        <br></br>
                        {props ? props.implementation.findings[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.findings[2] : null}</b>

                        <br></br>
                        {props ? props.implementation.findings[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.findings[4] : null}</b>

                        <br></br>
                        {props ? props.implementation.findings[5] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.findings[6] : null}</b>

                        <br></br>
                        {props ? props.implementation.findings[7] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.findings[8] : null}</b>

                        <br></br>
                        {props ? props.implementation.findings[9] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>
                            {props ? props.implementation.findings[10] : null}
                        </b>

                        <br></br>
                        {props ? props.implementation.findings[11] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full" style={{ flexDirection: "row" }}>
                <img
                    alt="iPhone with mental assessment"
                    src={props ? props.images.MErevision2 : null}
                    style={{ width: "15%" }}
                />
                <img
                    alt="iPhone with assessment results"
                    src={props ? props.images.MErevision3 : null}
                    style={{ width: "15%" }}
                />
                <img
                    alt="iPhone with assessment results"
                    src={props ? props.images.MErevision3 : null}
                    style={{ width: "15%" }}
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key changes
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        To refine the design, I changed the significant issues
                        users faced
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.changes[0] : null}</b>
                        <br></br>
                        {props ? props.implementation.changes[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.changes[2] : null}</b>
                        <br></br>
                        {props ? props.implementation.changes[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.changes[4] : null}</b>
                        <br></br>
                        {props ? props.implementation.changes[5] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.changes[6] : null}</b>
                        <br></br>
                        {props ? props.implementation.changes[7] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.changes[8] : null}</b>
                        <br></br>
                        {props ? props.implementation.changes[9] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        <b>{props ? props.implementation.changes[10] : null}</b>
                        <br></br>
                        {props ? props.implementation.changes[11] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[12] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="4 iPhones with main mind evolution features"
                    src={props ? props.images.ME2nditeration : null}
                    className="tab-section__content--img"
                />
            </div>
        </Element>
    );
};

export default MEImplementation;
