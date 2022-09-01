import "../../sections.scss";
import { Element } from "react-scroll";

export const CPIdeation = (props) => {
    return (
        <Element id="ideation" name="ideation">
            <hr></hr>

            <div className="tab-section">
                <h4 className="tab-section__title">
                    day two: sketch the solution
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.sketch : null}
                    </p>
                </div>
            </div>
            <hr></hr>

            <div className="tab-section">
                <h4 className="tab-section__title">lightening demos</h4>
                <div className="tab-section__content">
                    <div className="tab-section__content tab-section__content--center">
                        <h6 className="tab-section__content--title">
                            Puppyshot
                        </h6>
                        <p className="tab-section__content--desc">
                            1.{" "}
                            {props
                                ? props.ideation.lightening.puppyshot[0]
                                : null}
                        </p>
                        <p className="tab-section__content--desc">
                            2.{" "}
                            {props
                                ? props.ideation.lightening.puppyshot[1]
                                : null}
                        </p>
                        <p className="tab-section__content--desc">
                            3.{" "}
                            {props
                                ? props.ideation.lightening.puppyshot[2]
                                : null}
                        </p>
                        <img
                            alt="City Pups Mapping"
                            src={props ? props.images.LighteningDemo12 : null}
                            className="tab-section__content--img"
                        />
                    </div>

                    <div className="tab-section__content tab-section__content--center">
                        <h6 className="tab-section__content--title">
                            Pet Finder
                        </h6>
                        <p className="tab-section__content--desc">
                            1.{" "}
                            {props
                                ? props.ideation.lightening.petfinder[0]
                                : null}
                        </p>
                        <p className="tab-section__content--desc">
                            2.{" "}
                            {props
                                ? props.ideation.lightening.petfinder[1]
                                : null}
                        </p>
                        <p className="tab-section__content--desc">
                            3.{" "}
                            {props
                                ? props.ideation.lightening.petfinder[2]
                                : null}
                        </p>
                        <img
                            alt="City Pups Mapping"
                            src={props ? props.images.LighteningDemo2 : null}
                            className="tab-section__content--img"
                        />
                    </div>

                    <div className="tab-section__content tab-section__content--center">
                        <h6 className="tab-section__content--title ">Proven</h6>
                        <p className="tab-section__content--desc">
                            1.{" "}
                            {props ? props.ideation.lightening.proven[0] : null}
                        </p>
                        <p className="tab-section__content--desc">
                            2.{" "}
                            {props ? props.ideation.lightening.proven[1] : null}
                        </p>
                        <p className="tab-section__content--desc">
                            3.{" "}
                            {props ? props.ideation.lightening.proven[2] : null}
                        </p>
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
                    <img
                        alt="City Pups Mapping"
                        src={props ? props.images.Group9 : null}
                        className="tab-section__content--img"
                    />
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.crazy[4] : null}
                    </p>
                    <img
                        alt="City Pups Mapping"
                        src={props ? props.images.Crazy81 : null}
                        className="tab-section__content--img"
                    />
                </div>
            </div>
            <hr></hr>

            <div className="tab-section">
                <h4 className="tab-section__title">day three: decide</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.ideation.decide[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.ideation.decide[1] : null}
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
