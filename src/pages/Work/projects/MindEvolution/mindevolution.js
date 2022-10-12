import './mindevolution.scss';
import project from './mind_evolution.json';
import Tabs from '../../../../components/tabs/tabs';
import Chat from '../../../../components/chat/chat';

// Import Project Sections
import MEOverview from './sections/overview';
import MEResearch from './sections/research';
import MESynthesis from './sections/synthesis';
import MEIdeation from './sections/ideation';
import MEImplementation from './sections/implementation';
import MEConclusion from './sections/conclusion';

// Import Images, assign to variable to pass to sections
import Branding from './images/Branding.png';
import emoji1 from './images/emoji1.png';
import emoji2 from './images/emoji2.png';
import Emoji3 from './images/Emoji3.png';
import emoji4 from './images/emoji4.png';
import emoji5 from './images/emoji5.png';
import emoji6 from './images/emoji6.png';
import Fact1 from './images/Fact1.png';
import Fact2 from './images/Fact2.png';
import Fact3 from './images/Fact3.png';
import Group353 from './images/Group353.png';
import IA1 from './images/IA1.png';
import ME2nditeration from './images/ME2nditeration.png';
import MEbrainstorm2 from './images/MEbrainstorm2.png';
import MEbrainstorm3 from './images/MEbrainstorm3.png';
import MEbrainstorm from './images/MEbrainstorm.png';
import MEHifi1 from './images/MEHifi1.png';
import MEHifi2 from './images/MEHifi2.png';
import MEknowledgepostit from './images/MEknowledgepostit.png';
import MELogo from './images/MELogo.png';
import MEPersona1 from './images/MEPersona1.png';
import MEPersona2 from './images/MEPersona2.png';
import MEPersona3 from './images/MEPersona3.png';
import MEresearchpostit from './images/MEresearchpostit.png';
import MEtreatmentpostit from './images/MEtreatmentpostit.png';
import MErevision1 from './images/MErevision1.png';
import MErevision2 from './images/MErevision2.png';
import MErevision3 from './images/MErevision3.png';
import MEstylecolors from './images/MEstylecolors.png';
import MEuserflow from './images/MEuserflow.png';
import MEAffinity from './images/MEAffinity.png';
import Userjourney2 from './images/Userjourney2.png';
import Solution1 from './images/Solution1.png';
import Solution2 from './images/Solution2.png';
import Solution3 from './images/Solution3.png';
import Solution4 from './images/Solution4.png';
import Solution5 from './images/Solution5.png';
import Solution6 from './images/Solution6.png';
import NewCSHeaderimage from './images/NewCSHeaderimage.png';
import HMW1 from './images/HMW1.png';
import skt1 from './images/skt1.png';
import skt2 from './images/skt2.png';
import skt3 from './images/skt3.png';

export default function MindEvolution() {
 const MEimages = {
  Branding,
  emoji1,
  emoji2,
  Emoji3,
  emoji4,
  emoji5,
  emoji6,
  Fact1,
  Fact2,
  Fact3,
  Group353,
  IA1,
  ME2nditeration,
  MEbrainstorm2,
  MEbrainstorm3,
  MEbrainstorm,
  MEHifi1,
  MEHifi2,
  MEknowledgepostit,
  MEtreatmentpostit,
  MELogo,
  MEPersona1,
  MEPersona2,
  MEPersona3,
  MEresearchpostit,
  MErevision1,
  MErevision2,
  MErevision3,
  MEstylecolors,
  MEuserflow,
  MEAffinity,
  Userjourney2,
  Solution1,
  Solution2,
  Solution3,
  Solution4,
  Solution5,
  Solution6,
  NewCSHeaderimage,
  HMW1,
  skt1,
  skt2,
  skt3
 };

 return (
  <>
   <div id='mind-evo' name='mind-evo'>
    <img
     src={MEimages.NewCSHeaderimage}
     alt='Mind Evolution'
     className='me__landing-photo'
    />
    <Tabs project={project} bannerImg={MEimages.NewCSHeaderimage} />
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
   <Chat />
  </>
 );
}
