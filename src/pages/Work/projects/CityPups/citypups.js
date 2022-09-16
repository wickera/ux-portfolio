import "./citypups.scss";
import project from "./city_pups.json";
import Tabs from "../../../../components/tabs/tabs";
import Chat from "../../../../components/chat/chat";

// Import Project Sections
import CPOverview from "./sections/overview";
import CPResearch from "./sections/research";
import CPIdeation from "./sections/ideation";
import CPImplementation from "./sections/implementation";
import CPConclusion from "./sections/conclusion";

// Import Images, assign to variable to pass to sections
import AffinityMap from "./images/AffinityMap.png";
import CPHeader from "./images/Newcpheader.png";
import Crazy81 from "./images/Crazy-81.png";
import DesignSprintGraphic from "./images/DesignSprintGraphic.png";
import Ellie from "./images/Ellie.png";
import Group9 from "./images/Group 9.png";
import Group167 from "./images/Group167.png";
import Interviews from "./images/Interviews.png";
import LighteningDemo12 from "./images/Lighteningdemo12.png";
import LighteningDemo2 from "./images/Lighteningdemo2.png";
import Mockup1 from "./images/Mockup1.png";
import Mockup2 from "./images/Mockup2.png";
import Mockup3 from "./images/Mockup3.png";
import Mockup4 from "./images/Mockup4.png";
import Storyboard1 from "./images/Storyboard1.png";
import Userflowmapping from "./images/Userflowmapping.png";
import Homeaftertesting from "./images/Homeaftertesting.png";
import Homebeforetesting from "./images/Homebeforetesting.png";
import Profileafter from "./images/Profileafter.png";
import Profilebefore from "./images/Profilebefore.png";
import Resultsbefore from "./images/Resultsbefore.png";
import Resultsafter from "./images/Resultsafter.png";
import sketch1 from "./images/sketch1.png";

export default function CityPups() {
    const CPimages = {
        AffinityMap,
        CPHeader,
        Crazy81,
        DesignSprintGraphic,
        Ellie,
        Group9,
        Group167,
        Interviews,
        LighteningDemo12,
        LighteningDemo2,
        Mockup1,
        Mockup2,
        Mockup3,
        Mockup4,
        Storyboard1,
        Userflowmapping,
        Homeaftertesting,
        Homebeforetesting,
        Profileafter,
        Profilebefore,
        Resultsafter,
        Resultsbefore,
        sketch1,
    };

    return (
        <>
            <div id="city-pups" name="city-pups">
                <img
                    src={CPimages.CPHeader}
                    alt="City Pups"
                    className="cp__landing-photo"
                />
                <Tabs project={project} bannerImg={CPimages.CPHeader} />
                <CPOverview
                    overview={project.sections[0].overview}
                    images={CPimages}
                />
                <CPResearch
                    research={project.sections[1].research}
                    images={CPimages}
                />
                <CPIdeation
                    ideation={project.sections[2].ideation}
                    images={CPimages}
                />
                <CPImplementation
                    implementation={project.sections[3].implementation}
                    images={CPimages}
                />
                <CPConclusion
                    conclusion={project.sections[4].conclusion}
                    images={CPimages}
                />
            </div>
            <Chat />
        </>
    );
}
