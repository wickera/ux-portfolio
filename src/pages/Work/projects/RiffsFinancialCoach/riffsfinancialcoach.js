import './riffsfinancialcoach.scss';
import project from './riffs_financial_coach.json';
// import LandingPhoto from './images/Riff work page header.png';
import Tabs from '../../../../components/tabs/tabs';
import Footer from '../../../../components/footer/footer';

// Import Project Sections
import RFCOverview from './sections/overview';
import RFCResearch from './sections/research';
import RFCSynthesis from './sections/synthesis';
import RFCIdeation from './sections/ideation';
import RFCImplementation from './sections/implementation';
import RFCConclusion from './sections/conclusion';

// Import Images, assign to variable to pass to sections
import designs from './images/1stdesigns.png';
import budget from './images/budget.png';
import dashboard3 from './images/dashboard3.png';
import dashboard4 from './images/dashboard4.png';
import finance from './images/Finance.png';
import Group1597 from './images/Group1597.png';
import Group1599 from './images/Group1599.png';
import Group1602 from './images/Group1602.png';
import Group1603 from './images/Group1603.png';
import Group1604 from './images/Group1604.png';
import growprofit from './images/growprofit.png';
import header from './images/header.png';
import maindashboard from './images/maindashboard.png';
import MonthlyGoal2 from './images/MonthlyGoal2.png';
import MonthlyProfit2 from './images/MonthlyProfit2.png';
import newhabits from './images/newhabits.png';
import portfolioimg from './images/portfolioimg.png';
import profit1 from './images/profit1.png';
import revenue1 from './images/revenue1.png';
import safetynet from './images/safetynet.png';
import testing from './images/testing.png';
import wireflows from './images/wireflows.png';
import workheader from './images/workheader.png';

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
  workheader
 };
 return (
  <>
   <div id='rfc' name='rfc'>
    <img
     //  src={LandingPhoto}
     alt='Riffs Financial Coach'
     className='rfc__landing-photo'
    />

    <Tabs project={project} />
    <RFCOverview overview={project.sections[0].overview} images={RFCimages} />
    <RFCResearch research={project.sections[1].research} images={RFCimages} />
    <RFCSynthesis research={project.sections[2].synthesis} images={RFCimages} />

    <RFCIdeation ideation={project.sections[3].ideation} images={RFCimages} />
    <RFCImplementation
     implementation={project.sections[4].implementation}
     images={RFCimages}
    />
    <RFCConclusion
     conclusion={project.sections[5].conclusion}
     images={RFCimages}
    />
   </div>
   <Footer />
  </>
 );
}
