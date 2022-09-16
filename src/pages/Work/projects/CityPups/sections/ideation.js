import "../../sections.scss";
import { Element } from "react-scroll";

export const CPIdeation = (props) => {
    return (
        <Element id="ideation" name="ideation">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    day 2: sketch the solution
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Competitors did not have a detailed assessment of users
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.sketch : null}
                    </p>
                </div>
            </div>
            <div className="tab-section">
                <h4 className="tab-section__title">lightening demos</h4>

                <div className="tab-section__content">
                    <div>
                        <h6 className="left" style={{ padding: "0 2rem 1rem" }}>
                            Puppyshot
                        </h6>
                        <p className="tab-section__content--desc left space">
                            1.{" "}
                            {props
                                ? props.ideation.lightening.puppyshot[0]
                                : null}
                            <br></br>
                            2.{" "}
                            {props
                                ? props.ideation.lightening.puppyshot[1]
                                : null}
                            <br></br>
                            3.{" "}
                            {props
                                ? props.ideation.lightening.puppyshot[2]
                                : null}
                        </p>
                    </div>
                    <div className="center">
                        <img
                            alt="City Pups Mapping"
                            src={props ? props.images.LighteningDemo12 : null}
                            className="tab-section__content--img"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <h6 className="left" style={{ padding: "0 2rem 1rem" }}>
                            Pet Finder
                        </h6>
                        <p className="tab-section__content--desc left space">
                            1.{" "}
                            {props
                                ? props.ideation.lightening.petfinder[0]
                                : null}
                            <br></br>
                            2.{" "}
                            {props
                                ? props.ideation.lightening.petfinder[1]
                                : null}
                            <br></br>
                            3.{" "}
                            {props
                                ? props.ideation.lightening.petfinder[2]
                                : null}
                        </p>
                    </div>
                    <div className="center">
                        <img
                            alt="City Pups Mapping"
                            src={props ? props.images.LighteningDemo2 : null}
                            className="tab-section__content--img center"
                        />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div>
                        <h6 className="left" style={{ padding: "0 2rem 1rem" }}>
                            Proven
                        </h6>
                        <p className="tab-section__content--desc left space">
                            1.{" "}
                            {props ? props.ideation.lightening.proven[0] : null}
                            <br></br>
                            2.{" "}
                            {props ? props.ideation.lightening.proven[1] : null}
                            <br></br>
                            3.{" "}
                            {props ? props.ideation.lightening.proven[2] : null}
                        </p>
                    </div>
                    <div className="center">
                        <img
                            alt="City Pups Mapping"
                            src={props ? props.images.Group167 : null}
                            className="tab-section__content--img"
                        />
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">crazy 8's</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Sketching designs for efficient flows
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.crazy[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.crazy[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.crazy[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.crazy[3] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.crazy[4] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="City Pups Mapping"
                    src={props ? props.images.sketch1 : null}
                    className="tab-section__content--img"
                />
            </div>
            <div className="tab-section">
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.crazy[4] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="City Pups Mapping"
                    src={props ? props.images.Crazy81 : null}
                    className="tab-section__content--med-img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">day three: decide</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Laying out the solution
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.decide[1] : null}
                    </p>
                    <p className="tab-section__content--title">
                        {props ? props.ideation.decide[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.decide[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.decide[3] : null}
                    </p>
                    <img
                        alt="City Pups Mapping"
                        src={props ? props.images.Storyboard1 : null}
                        className="tab-section__content--img"
                    />
                </div>
            </div>
        </Element>
    );
};

export default CPIdeation;
