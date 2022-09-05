import "./riffsfinancialcoach.scss";
import project from "./riffs_financial_coach.json";
// import LandingPhoto from './images/Riff work page header.png';
import Tabs from "../../../../components/tabs/tabs";
import Chat from "../../../../components/chat/chat";

// Import Project Sections
import RFCOverview from "./sections/overview";
import RFCResearch from "./sections/research";
import RFCIdeation from "./sections/ideation";
import RFCImplementation from "./sections/implementation";
import RFCConclusion from "./sections/conclusion";

// Import Images, assign to variable to pass to sections
import designs from "./images/1stdesigns.png";
import budget from "./images/budget.png";
import dashboard3 from "./images/dashboard3.png";
import dashboard4 from "./images/dashboard4.png";
import finance from "./images/Finance.png";
import FinanceOnly from "./images/FinanceONLYTutorialOverview4.png";
import Group1597 from "./images/Group1597.png";
import Group1599 from "./images/Group1599.png";
import Group1602 from "./images/Group1602.png";
import Group1603 from "./images/Group1603.png";
import Group1604 from "./images/Group1604.png";
import growprofit from "./images/growprofit.png";
import header from "./images/header.png";
import maindashboard from "./images/maindashboard.png";
import MonthlyGoal2 from "./images/MonthlyGoal2.png";
import MonthlyProfit2 from "./images/MonthlyProfit2.png";
import newhabits from "./images/newhabits.png";
import portfolioimg from "./images/portfolioimg.png";
import profit1 from "./images/profit1.png";
import revenue1 from "./images/revenue1.png";
import safetynet from "./images/safetynet.png";
import testing from "./images/testing.png";
import wireflows from "./images/wireflows.png";
import workheader from "./images/workheader.png";
import Iter1 from "./images/Iter1.png";
import Iter2 from "./images/Iter2.png";
import NewBudget from "./images/NEWBUDGETLAYOUT1.png";
import NewDashboard from "./images/NewDashboard42.png";
import NewGrowProfit from "./images/NEWGROWMYPROFIT1.png";
import NewHabits from "./images/NEWHABITS1.png";
import NewMonthlyProfit from "./images/NEWMONTHLYPROFIT1.png";
import NewMonthlyRevenue from "./images/NEWMONTHLYREVENUE1.png";
import NewPayments from "./images/NEWPAYMENTSDEBTSAFETY1.png";
import prototypeHeader from "./images/prototypeheader.png";
import ReachMainDashboard from "./images/ReachMaindashboard2.png";
import researchImages from "./images/researchimages.png";
import Riffnavbackground from "./images/Riffnavbackgnd.png";
import Riffnewheader from "./images/Riffnewheader.png";
import RiffProcessChart from "./images/RiffProcessChart2.png";
import userflow from "./images/userflowandIA.png";
import wireflows2 from "./images/wireflows2.png";

export default function RiffsFinancialCoach() {
    const RFCimages = {
        designs,
        budget,
        dashboard3,
        dashboard4,
        finance,
        Group1597,
        Group1599,
        Group1602,
        Group1603,
        Group1604,
        growprofit,
        header,
        maindashboard,
        MonthlyGoal2,
        MonthlyProfit2,
        newhabits,
        portfolioimg,
        profit1,
        revenue1,
        safetynet,
        testing,
        wireflows,
        workheader,
        FinanceOnly,
        Iter1,
        Iter2,
        NewBudget,
        NewDashboard,
        NewGrowProfit,
        NewHabits,
        NewMonthlyProfit,
        NewMonthlyRevenue,
        NewPayments,
        prototypeHeader,
        ReachMainDashboard,
        researchImages,
        Riffnavbackground,
        Riffnewheader,
        RiffProcessChart,
        userflow,
        wireflows2,
    };
    return (
        <>
            <div id="rfc" name="rfc">
                <img
                    src={RFCimages.Riffnewheader}
                    alt="Riffs Financial Coach"
                    className="rfc__landing-photo"
                />

                <Tabs project={project} bannerImg={RFCimages.Riffnewheader} />
                <RFCOverview
                    overview={project.sections[0].overview}
                    images={RFCimages}
                />
                <RFCResearch
                    research={project.sections[1].research}
                    images={RFCimages}
                />
                <RFCIdeation
                    ideation={project.sections[2].ideation}
                    images={RFCimages}
                />
                <RFCImplementation
                    implementation={project.sections[3].implementation}
                    images={RFCimages}
                />
                <RFCConclusion
                    conclusion={project.sections[4].conclusion}
                    images={RFCimages}
                />
            </div>
            <Chat />
        </>
    );
}
