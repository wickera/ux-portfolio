import './sections.scss';
import { Element } from 'react-scroll';

export const Overview = (props) => {
 return (
  <Element id='overview' name='overview'>
   <h1>Overview</h1>
   <p>
    Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia
    eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget
    consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget
    consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam
    vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta
    dapibus. Proin eget tortor risus.
   </p>
  </Element>
 );
};

export default Overview;