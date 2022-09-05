import "../../sections.scss";
import { Element } from "react-scroll";

export const NLFSynthesis = (props) => {
    return (
        <Element id="synthesis" name="synthesis">
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">affinity mapping</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.synthesis.mapping[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.mapping[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.mapping[2] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        1. {props ? props.synthesis.mapping[3] : null}
                        <br></br>
                        2. {props ? props.synthesis.mapping[4] : null}
                        <br></br>
                        3. {props ? props.synthesis.mapping[5] : null}
                        <br></br>
                        4. {props ? props.synthesis.mapping[6] : null}
                        <br></br>
                        5. {props ? props.synthesis.mapping[7] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="affinity mapping"
                    src={props ? props.images.affinitymaps : null}
                    className="tab-section__content--img"
                />
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">
                    these were some major key insights
                </h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--title">
                        {props ? props.synthesis.insights[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.insights[1] : null}
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tab-section">
                <h4 className="tab-section__title">competitor analysis</h4>
                <div className="tab-section__content">
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.analysis[0] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.analysis[1] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        1. {props ? props.synthesis.analysis[2] : null}
                        <br></br>
                        2. {props ? props.synthesis.analysis[3] : null}
                        <br></br>
                        3. {props ? props.synthesis.analysis[4] : null}
                        <br></br>
                        4. {props ? props.synthesis.analysis[5] : null}
                    </p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.analysis[6] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Comp1 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--title">Likes</p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.icons[0] : null}
                        <br></br>
                        {props ? props.synthesis.icons[1] : null}
                        <br></br>
                        {props ? props.synthesis.icons[2] : null}
                    </p>
                    <p className="tab-section__content--title">Opportunities</p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.icons[3] : null}
                        <br></br>
                        {props ? props.synthesis.icons[4] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Comp2 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--title">Likes</p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.icons[5] : null}
                        <br></br>
                        {props ? props.synthesis.icons[6] : null}
                        <br></br>
                        {props ? props.synthesis.icons[7] : null}
                    </p>
                    <p className="tab-section__content--title">Opportunities</p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.icons[8] : null}
                        <br></br>
                        {props ? props.synthesis.icons[9] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Comp3 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--title">Likes</p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.icons[10] : null}
                        <br></br>
                        {props ? props.synthesis.icons[11] : null}
                        <br></br>
                        {props ? props.synthesis.icons[12] : null}
                    </p>
                    <p className="tab-section__content--title">Opportunities</p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.icons[13] : null}
                        <br></br>
                        {props ? props.synthesis.icons[14] : null}
                    </p>
                </div>
            </div>
            <div className="tab-section__full row-reverse">
                <img
                    alt="Solution #2"
                    src={props ? props.images.Comp4 : null}
                    className="tab-section__content--row-img"
                />
                <div className="tab-section__full--desc">
                    <p className="tab-section__content--title">Likes</p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.icons[15] : null}
                        <br></br>
                        {props ? props.synthesis.icons[16] : null}
                    </p>
                    <p className="tab-section__content--title">Opportunities</p>
                    <p className="tab-section__content--desc">
                        {props ? props.synthesis.icons[17] : null}
                        <br></br>
                        {props ? props.synthesis.icons[18] : null}
                        <br></br>
                        {props ? props.synthesis.icons[19] : null}
                    </p>
                </div>
            </div>
        </Element>
    );
};

export default NLFSynthesis;
