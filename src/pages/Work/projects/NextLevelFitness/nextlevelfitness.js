import "./nextlevelfitness.scss";
import project from "./next_level_fitness.json";
import Tabs from "../../../../components/tabs/tabs";
import Chat from "../../../../components/chat/chat";

// Import Project Sections
import NLFOverview from "./sections/overview";
import NLFResearch from "./sections/research";
import NLFSynthesis from "./sections/synthesis";
import NLFIdeation from "./sections/ideation";
import NLFImplementation from "./sections/implementation";
import NLFConclusion from "./sections/conclusion";

// Import Images, assign to variable to pass to sections
import Group580 from "./images/Group 580.png";
import newnlf from "./images/new nlf.png";
import nlfaffinitymap from "./images/NLF Aiffinity map.png";
import nlffacts from "./images/NLF Facts.png";
import nlfthesolution from "./images/NLF The solution.png";
import Wireframes1 from "./images/Wireframes1.png";
import Wireframes2 from "./images/Wireframes2.png";
import Wireframes3 from "./images/Wireframes3.png";

export default function NextLevelFitness() {
    const NLFimages = {
        Group580,
        newnlf,
        nlfaffinitymap,
        nlffacts,
        nlfthesolution,
        Wireframes1,
        Wireframes2,
        Wireframes3,
    };

    return (
        <>
            <div className="nlf" id="nlf" name="nlf">
                <img
                    src={NLFimages.Group580}
                    alt="Next Level Fitness"
                    className="nlf__landing-photo"
                />
                <Tabs project={project} bannerImg={NLFimages.Group580} />
                <NLFOverview
                    overview={project.sections[0].overview}
                    images={NLFimages}
                />
                <NLFResearch
                    research={project.sections[1].research}
                    images={NLFimages}
                />
                <NLFSynthesis
                    synthesis={project.sections[2].synthesis}
                    images={NLFimages}
                />
                <NLFIdeation
                    ideation={project.sections[3].ideation}
                    images={NLFimages}
                />
                <NLFImplementation
                    implementation={project.sections[4].implementation}
                    images={NLFimages}
                />
                <NLFConclusion
                    conclusion={project.sections[5].conclusion}
                    images={NLFimages}
                />
            </div>
            <Chat />
        </>
    );
}
