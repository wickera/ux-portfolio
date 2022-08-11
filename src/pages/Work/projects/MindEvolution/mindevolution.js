import './mindevolution.scss';
import project from './mind_evolution.json';
import Tabs from '../../../../components/tabs/tabs';
import Footer from '../../../../components/footer/footer';

// Import Project Sections
import MEOverview from './sections/overview';
import MEResearch from './sections/research';
import MESynthesis from './sections/synthesis';
import MEIdeation from './sections/ideation';
import MEImplementation from './sections/implementation';
import MEConclusion from './sections/conclusion';

// Import Images, assign to variable to pass to sections
const Branding = require('./images/Branding.png');
const emoji1 = require('./images/emoji1.png');
const emoji2 = require('./images/emoji2.png');
const Emoji3 = require('./images/Emoji3.png');
const emoji5 = require('./images/emoji5.png');
const emoji6 = require('./images/emoji6.png');
const Fact1 = require('./images/Fact1.png');
const Fact2 = require('./images/Fact2.png');
const Fact3 = require('./images/Fact3.png');
const Group111 = require('./images/Group111.png');
const Group211 = require('./images/Group211.png');
const Group311 = require('./images/Group311.png');
const Group353 = require('./images/Group353.png');
const Group461 = require('./images/Group461.png');
const Group467 = require('./images/Group467.png');
const Group469 = require('./images/Group469.png');
const Group470 = require('./images/Group470.png');
const Group3632 = require('./images/Group3632.png');
const IA1 = require('./images/IA1.png');
const ME2nditeration = require('./images/ME2nditeration.png');
const ME32 = require('./images/ME32.png');
const ME52 = require('./images/ME52.png');
const ME72 = require('./images/ME72.png');
const MEbrainstorm2 = require('./images/MEbrainstorm2.png');
const MEbrainstorm3 = require('./images/MEbrainstorm3.png');
const MEbrainstorm = require('./images/MEbrainstorm.png');
const MEGroup3631 = require('./images/MEGroup3631.png');
const MEHeader = require('./images/MEHeader.png');
const MEHifi1 = require('./images/MEHifi1.png');
const MEHifi2 = require('./images/MEHifi2.png');
const MEInsight5 = require('./images/MEInsight5.png');
const MEknowledgepostit = require('./images/MEknowledgepostit.png');
const MELogo = require('./images/MELogo.png');
const MEPersona1 = require('./images/MEPersona1.png');
const MEPersona2 = require('./images/MEPersona2.png');
const MEPersona3 = require('./images/MEPersona3.png');
const MEresearchpostit = require('./images/MEresearchpostit.png');
const MErevision2 = require('./images/MErevision2.png');
const MErevision3 = require('./images/MErevision3.png');
const MESolution = require('./images/MESolution.png');
const MEstylecolors = require('./images/MEstylecolors.png');
const MEuserflow = require('./images/MEuserflow.png');
const MEWireframes = require('./images/MEWireframes.png');
const MEAffinity = require('./images/MEAffinity.png');
const NewHeaderME = require('./images/NewheaderME.png');
const uj6 = require('./images/uj6.png');
const Userjourney2 = require('./images/Userjourney2.png');

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
  Userjourney2
 };
 console.log(MEimages);
 return (
  <>
   <div id='mind-evo' name='mind-evo'>
    <img
     src={MEimages.MEHeader}
     alt='Mind Evolution'
     className='me__landing-photo'
    />
    <Tabs project={project} bannerImg={MEimages.MEHeader} />
    <MEOverview overview={project.sections[0].overview} images={MEimages} />
    <MEResearch research={project.sections[1].research} images={MEimages} />
    <MESynthesis synthesis={project.sections[2].synthesis} images={MEimages} />
    <MEIdeation ideation={project.sections[3].ideation} images={MEimages} />
    <MEImplementation
     implementation={project.sections[4].implementation}
     images={MEimages}
    />
    <MEConclusion
     conclusion={project.sections[5].conclusion}
     images={MEimages}
    />
   </div>
   <Footer />
  </>
 );
}
