import './citypups.scss';
import project from './city_pups.json';
import Tabs from '../../../../components/tabs/tabs';
import Footer from '../../../../components/footer/footer';

// Import Images, assign to variable, and pass to Tabs
import AffinityMap from './images/AffinityMap.png';
import CPLanding from './images/CPLanding.png';
import Crazy81 from './images/Crazy-81.png';
import crazy81 from './images/crazy81.png';
import DesignSprintGraphic from './images/DesignSprintGraphic.png';
import Ellie from './images/Ellie.png';
import Group9 from './images/Group 9.png';
import Group167 from './images/Group167.png';
import Interviews from './images/Interviews.png';
import LighteningDemo2 from './images/Lighteningdemo2.png';
import LighteningDemo12 from './images/Lighteningdemo12.png';
import Mockup1 from './images/Mockup1.png';
import Mockup2 from './images/Mockup2.png';
import Mockup3 from './images/Mockup3.png';
import Mockup4 from './images/Mockup4.png';
import newcitypups from './images/newcitypups.png';
import Storyboard1 from './images/Storyboard1.png';
import Userflowmapping from './images/Userflowmapping.png';

export default function CityPups() {
 const images = {
  AffinityMap,
  CPLanding,
  Crazy81,
  crazy81,
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
  newcitypups,
  Storyboard1,
  Userflowmapping
 };

 return (
  <>
   <div className='city-pups' id='city-pups' name='city-pups'>
    <img
     src={images.CPLanding}
     alt='City Pups'
     className='city-pups__landing-photo'
    />
    <Tabs project={project} images={images} bannerImg={images.CPLanding} />
   </div>
   <Footer />
  </>
 );
}
