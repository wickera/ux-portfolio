import "../../sections.scss";
import { Element } from "react-scroll";

export const MESynthesis = (props) => {
    return (
        <Element id="synthesis" name="synthesis">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">Affinity mapping</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Addressing mental health should not be a luxury
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.mapping : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full ">
                <img
                    alt="Solution #1"
                    src={props ? props.images.MEAffinity : null}
                    className="tab-section__content--img"
                />
                <img
                    alt="Solution #2"
                    src={props ? props.images.MEknowledgepostit : null}
                    className="tab-section__content--icon"
                />
                <img
                    alt="Solution #4"
                    src={props ? props.images.MEtreatmentpostit : null}
                    className="tab-section__content--icon"
                />
                <img
                    alt="Solution #4"
                    src={props ? props.images.MEtreatmentpostit : null}
                    className="tab-section__content--icon"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    These were some major key insights
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Lack of knowledge about mental health leads to a lack of
                        treatment
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.insights[0] : null}
                    </p>
                    <p className="tab-section__content--desc left">
                        <b>{props ? props.synthesis.insights[1] : null}</b>
                        <br></br>
                        1. {props ? props.synthesis.insights[2] : null}
                        <br></br>
                        2. {props ? props.synthesis.insights[3] : null}
                        <br></br>
                        3. {props ? props.synthesis.insights[4] : null}
                    </p>
                    <p className="tab-section__content--desc left">
                        <b>{props ? props.synthesis.insights[5] : null}</b>
                        <br></br>
                        1. {props ? props.synthesis.insights[6] : null}
                        <br></br>
                        2. {props ? props.synthesis.insights[7] : null}
                        <br></br>
                        3. {props ? props.synthesis.insights[8] : null}
                    </p>
                    <p className="tab-section__content--desc left">
                        <b>{props ? props.synthesis.insights[9] : null}</b>
                        <br></br>
                        1. {props ? props.synthesis.insights[10] : null}
                        <br></br>
                        2. {props ? props.synthesis.insights[11] : null}
                        <br></br>
                        3. {props ? props.synthesis.insights[12] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <div className="tab-section__content center">
                    <p className="tab-section__content--title center space">
                        {props ? props.synthesis.quote[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.quote[1] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">Challenges</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        I overcame analysis paralysis
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.challenges : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">Empathy mapping</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        Your mental health is essential; you have to take care
                        of yourself
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.empathy[0] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full ">
                <img
                    alt="empathy map persona"
                    src={props ? props.images.emp1 : null}
                    className="tab-section__content--row-img"
                />
                <p
                    className="tab-section__content--desc"
                    style={{ width: "20rem" }}
                >
                    {props ? props.synthesis.empathy[1] : null}
                </p>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="empathy map persona"
                    src={props ? props.images.emp2 : null}
                    className="tab-section__content--row-img"
                />
                <p
                    className="tab-section__content--desc"
                    style={{ width: "20rem" }}
                >
                    {props ? props.synthesis.empathy[2] : null}
                </p>
            </div>
            <div className="tab-section__full">
                <img
                    alt="empathy map persona"
                    src={props ? props.images.emp3 : null}
                    className="tab-section__content--row-img"
                />
                <p
                    className="tab-section__content--desc"
                    style={{ width: "20rem" }}
                >
                    {props ? props.synthesis.empathy[3] : null}
                </p>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">Personas</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        The cornerstone of the project
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.personas[0] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #1"
                    src={props ? props.images.MEPersona1 : null}
                    className="tab-section__content--row-img"
                />
                <p
                    className="tab-section__content--desc"
                    style={{ width: "20rem" }}
                >
                    {props ? props.synthesis.empathy[1] : null}
                </p>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #1"
                    src={props ? props.images.MEPersona2 : null}
                    className="tab-section__content--row-img"
                />
                <p
                    className="tab-section__content--desc"
                    style={{ width: "20rem" }}
                >
                    {props ? props.synthesis.empathy[2] : null}
                </p>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #1"
                    src={props ? props.images.MEPersona3 : null}
                    className="tab-section__content--row-img"
                />
                <p
                    className="tab-section__content--desc"
                    style={{ width: "20rem" }}
                >
                    {props ? props.synthesis.empathy[3] : null}
                </p>
            </div>
        </Element>
    );
};

export default MESynthesis;
