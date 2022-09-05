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
                        {props ? props.implementation.prototype[1] : null}
                        <br></br>
                        1. {props ? props.implementation.prototype[2] : null}
                        <br></br>
                        2. {props ? props.implementation.prototype[3] : null}
                        <br></br>
                        3. {props ? props.implementation.prototype[4] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Group353 : null}
                    className="tab-section__content--row-img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key findings
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.findings[0] : null}
                        <br></br>
                        {props ? props.implementation.findings[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.findings[2] : null}
                        <br></br>
                        {props ? props.implementation.findings[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.findings[4] : null}
                        <br></br>
                        {props ? props.implementation.findings[5] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.findings[6] : null}
                        <br></br>
                        {props ? props.implementation.findings[7] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.findings[8] : null}
                        <br></br>
                        {props ? props.implementation.findings[9] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.findings[10] : null}
                        <br></br>
                        {props ? props.implementation.findings[11] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.MErevision2 : null}
                    className="tab-section__content--row-img"
                />
                <img
                    alt="Solution #2"
                    src={props ? props.images.MErevision3 : null}
                    className="tab-section__content--row-img"
                />
                <img
                    alt="Solution #2"
                    src={props ? props.images.MErevision3 : null}
                    className="tab-section__content--row-img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key changes
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[0] : null}
                        <br></br>
                        {props ? props.implementation.changes[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[2] : null}
                        <br></br>
                        {props ? props.implementation.changes[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[4] : null}
                        <br></br>
                        {props ? props.implementation.changes[5] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[6] : null}
                        <br></br>
                        {props ? props.implementation.changes[7] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[8] : null}
                        <br></br>
                        {props ? props.implementation.changes[9] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.implementation.changes[10] : null}
                        <br></br>
                        {props ? props.implementation.changes[11] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.ME2nditeration : null}
                    className="tab-section__content--img"
                />
            </div>
            <div className="tab-section__full">
                <p className="tab-section__content--desc">
                    {props ? props.implementation.changes[12] : null}
                </p>
            </div>
        </Element>
    );
};

export default MEImplementation;
