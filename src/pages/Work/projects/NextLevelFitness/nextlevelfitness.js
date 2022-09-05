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
import NextLevelFitnessHeader from "./images/NextLevelFitnessHeaderimage1.png";
import ndhifimocks from "./images/2ndhifimocks.png";
import ndhifimocks2 from "./images/2ndhifimocks2.png";
import ndhifimocks3 from "./images/2ndhifimocks3.png";
import AffinityandUserFlows from "./images/AffinityandUserFlowsUserFlow1.png";
import affinitymaps from "./images/affinitymaps.png";
import Comp1 from "./images/Comp1.png";
import Comp2 from "./images/Comp2.png";
import Comp3 from "./images/Comp3.png";
import Comp4 from "./images/comp4.png";
import hifi1 from "./images/hifi1.png";
import hifi2 from "./images/hifi2.png";
import hifinewflows from "./images/hifinewflows.png";
import Insightschart from "./images/Insightschart.png";
import processchart from "./images/processchart.png";
import Prototype from "./images/Prototype.png";
import solution1 from "./images/solution1.png";
import solution2 from "./images/solution2.png";
import solution3 from "./images/solution3.png";
import solution4 from "./images/solution4.png";
import solution5 from "./images/solution5.png";
import userinterviewchart from "./images/userinterviewchart.png";
import Wireframes1 from "./images/Wireframes1.png";
import Wireframes2 from "./images/Wireframes2.png";
import Wireframes3 from "./images/Wireframes3.png";

export default function NextLevelFitness() {
    const NLFimages = {
        NextLevelFitnessHeader,
        ndhifimocks,
        ndhifimocks2,
        ndhifimocks3,
        AffinityandUserFlows,
        affinitymaps,
        Comp1,
        Comp2,
        Comp3,
        Comp4,
        hifi1,
        hifi2,
        hifinewflows,
        Insightschart,
        processchart,
        Prototype,
        solution1,
        solution2,
        solution3,
        solution4,
        solution5,
        userinterviewchart,
        Wireframes1,
        Wireframes2,
        Wireframes3,
    };

    return (
        <>
            <div className="nlf" id="nlf" name="nlf">
                <img
                    src={NLFimages.NextLevelFitnessHeader}
                    alt="Next Level Fitness"
                    className="nlf__landing-photo"
                />
                <Tabs
                    project={project}
                    bannerImg={NLFimages.NextLevelFitnessHeader}
                />
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
