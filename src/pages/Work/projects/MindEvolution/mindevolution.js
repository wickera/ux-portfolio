import "./mindevolution.scss";
import project from "./mind_evolution.json";
import Tabs from "../../../../components/tabs/tabs";
import Chat from "../../../../components/chat/chat";

// Import Project Sections
import MEOverview from "./sections/overview";
import MEResearch from "./sections/research";
import MESynthesis from "./sections/synthesis";
import MEIdeation from "./sections/ideation";
import MEImplementation from "./sections/implementation";
import MEConclusion from "./sections/conclusion";

// Import Images, assign to variable to pass to sections
import Branding from "./images/Branding.png";
import emoji1 from "./images/emoji1.png";
import emoji2 from "./images/emoji2.png";
import Emoji3 from "./images/Emoji3.png";
import emoji5 from "./images/emoji5.png";
import emoji6 from "./images/emoji6.png";
import Fact1 from "./images/Fact1.png";
import Fact2 from "./images/Fact2.png";
import Fact3 from "./images/Fact3.png";
import Group111 from "./images/Group111.png";
import Group211 from "./images/Group211.png";
import Group311 from "./images/Group311.png";
import Group353 from "./images/Group353.png";
import Group461 from "./images/Group461.png";
import Group467 from "./images/Group467.png";
import Group469 from "./images/Group469.png";
import Group470 from "./images/Group470.png";
import Group3632 from "./images/Group3632.png";
import IA1 from "./images/IA1.png";
import ME2nditeration from "./images/ME2nditeration.png";
import ME32 from "./images/ME32.png";
import ME52 from "./images/ME52.png";
import ME72 from "./images/ME72.png";
import MEbrainstorm2 from "./images/MEbrainstorm2.png";
import MEbrainstorm3 from "./images/MEbrainstorm3.png";
import MEbrainstorm from "./images/MEbrainstorm.png";
import MEGroup3631 from "./images/MEGroup3631.png";
import MEHeader from "./images/MEHeader.png";
import MEHifi1 from "./images/MEHifi1.png";
import MEHifi2 from "./images/MEHifi2.png";
import MEInsight5 from "./images/MEInsight5.png";
import MEknowledgepostit from "./images/MEknowledgepostit.png";
import MELogo from "./images/MELogo.png";
import MEPersona1 from "./images/MEPersona1.png";
import MEPersona2 from "./images/MEPersona2.png";
import MEPersona3 from "./images/MEPersona3.png";
import MEresearchpostit from "./images/MEresearchpostit.png";
import MErevision2 from "./images/MErevision2.png";
import MErevision3 from "./images/MErevision3.png";
import MESolution from "./images/MESolution.png";
import MEstylecolors from "./images/MEstylecolors.png";
import MEuserflow from "./images/MEuserflow.png";
import MEWireframes from "./images/MEWireframes.png";
import MEAffinity from "./images/MEAffinity.png";
import NewHeaderME from "./images/NewheaderME.png";
import uj6 from "./images/uj6.png";
import Userjourney2 from "./images/Userjourney2.png";

export default function MindEvolution() {
    const MEimages = {
        Branding,
        emoji1,
        emoji2,
        Emoji3,
        emoji5,
        emoji6,
        Fact1,
        Fact2,
        Fact3,
        Group111,
        Group211,
        Group311,
        Group353,
        Group461,
        Group467,
        Group469,
        Group470,
        Group3632,
        IA1,
        ME2nditeration,
        ME32,
        ME52,
        ME72,
        MEbrainstorm2,
        MEbrainstorm3,
        MEbrainstorm,
        MEGroup3631,
        MEHeader,
        MEHifi1,
        MEHifi2,
        MEInsight5,
        MEknowledgepostit,
        MELogo,
        MEPersona1,
        MEPersona2,
        MEPersona3,
        MEresearchpostit,
        MErevision2,
        MErevision3,
        MESolution,
        MEstylecolors,
        MEuserflow,
        MEWireframes,
        MEAffinity,
        NewHeaderME,
        uj6,
        Userjourney2,
    };

    return (
        <>
            <div id="mind-evo" name="mind-evo">
                <img
                    src={MEimages.MEHeader}
                    alt="Mind Evolution"
                    className="me__landing-photo"
                />
                <Tabs project={project} bannerImg={MEimages.MEHeader} />
                <MEOverview
                    overview={project.sections[0].overview}
                    images={MEimages}
                />
                <MEResearch
                    research={project.sections[1].research}
                    images={MEimages}
                />
                <MESynthesis
                    synthesis={project.sections[2].synthesis}
                    images={MEimages}
                />
                <MEIdeation
                    ideation={project.sections[3].ideation}
                    images={MEimages}
                />
                <MEImplementation
                    implementation={project.sections[4].implementation}
                    images={MEimages}
                />
                <MEConclusion
                    conclusion={project.sections[5].conclusion}
                    images={MEimages}
                />
            </div>
            <Chat />
        </>
    );
}
