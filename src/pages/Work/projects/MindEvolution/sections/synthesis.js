import '../../sections.scss';
import '../mindevolution.scss';
import { Element } from 'react-scroll';

export const MESynthesis = (props) => {
 return (
  <Element id='synthesis' name='synthesis'>
   <hr></hr>
   <div className='me'>
    <h4 className='me__title'>Synthesis</h4>
    <div className='me__content'>
     <p className='me__content--title'>Seeing the answers</p>
     <p className='me__content--desc'>
      I was able to spot the 3 main insights the users provided by utilizing{' '}
      <b>Affinity Mapping</b>. This was vital to laying out the roadmap to find
      the solution.
     </p>
    </div>
   </div>
   <div className='me__content--full '>
    <img
     alt='Solution #1'
     src={props ? props.images.MEAffinity : null}
     style={{ width: '50%' }}
    />
    <img
     alt='Solution #2'
     src={props ? props.images.MEtreatmentpostit : null}
     style={{ width: '12%' }}
    />
    <img
     alt='Solution #4'
     src={props ? props.images.MEknowledgepostit : null}
     style={{ width: '12%' }}
    />
    <img
     alt='Solution #4'
     src={props ? props.images.MEresearchpostit : null}
     style={{ width: '12%' }}
    />
   </div>
   <div className='me__content'>
    <h4 className='me__content--title'>These were some major key insights</h4>
   </div>
   <table className='me__content--table'>
    <thead>
     <th>Themes &amp; Reasons</th>
     <th className='me__content--table--row--border'>
      Insights from interviews that align with themes
     </th>
     <th>Additional insight from interview</th>
    </thead>
    <tbody>
     <tr>
      <td>
       <div className='me__content--table--row'>
        <div className='me__content--table--row--black'>
         <h6>Theme 1: Research</h6>
         <ul>
          <li>
           1. Where is the centralized place to find all of the knowledge
          </li>
          <li>2. Trying to find information is like a research project</li>
          <li>3. Finding reputable resources is challenging</li>
         </ul>
        </div>
        <div className='me__content--table--row--equal'>=</div>
       </div>
      </td>
      <td className='me__content--table--row--border'>
       <div className='me__content--table--row me__content--table--row--column'>
        <div className='me__content--table--row--orange'>
         <img
          alt='empathy map persona'
          src={props ? props.images.emoji6 : null}
          className='me__content--table--row--orange--icon'
         />
         <p>Protection of personal information is important</p>
        </div>
        <div className='me__content--table--row--orange'>
         <img
          alt='empathy map persona'
          src={props ? props.images.Emoji3 : null}
          className='me__content--table--row--orange--icon'
         />
         <p>The researching process is difficult and time consuming</p>
        </div>
       </div>
      </td>
      <td className='center'>
       <div className='me__content--table--row--orange'>
        <img
         alt='empathy map persona'
         src={props ? props.images.emoji4 : null}
         className='me__content--table--row--orange--icon'
        />
        <p>
         People did not have a lot of experience using mental health apps. Most
         people mainly used meditation apps.
        </p>
       </div>
      </td>
     </tr>
     <tr>
      <td>
       <div className='me__content--table--row'>
        <div className='me__content--table--row--black'>
         <h6>Theme 2: Treatment</h6>
         <ul>
          <li>
           1. Treatment is not easily found, even for someone in a fairly
           privileged position.
          </li>
          <li>2. Mental Health treatment is a luxury</li>
         </ul>
        </div>
        <div className='me__content--table--row--equal'>=</div>
       </div>
      </td>
      <td className='me__content--table--row--border'>
       <div className='me__content--table--row--orange'>
        <img
         alt='empathy map persona'
         src={props ? props.images.emoji2 : null}
         className='me__content--table--row--orange--icon'
        />
        <p>People believe there is limited access to treatment</p>
       </div>
      </td>
     </tr>
     <tr>
      <td>
       <div className='me__content--table--row'>
        <div className='me__content--table--row--black'>
         <h6>Theme 3: Knowledge</h6>
         <ul>
          <li>
           1. I do not know enough, but still gaining knowledge of personal
           mental health
          </li>
          <li>
           2. Pretty well versed in mental health knowledge, but wants to learn
           more.
          </li>
          <li>
           3. People in society don't understand it collectively because they do
           not prioritize mental health.
          </li>
         </ul>
        </div>
        <div className='me__content--table--row--equal'>=</div>
       </div>
      </td>
      <td className='me__content--table--row--border'>
       <div className='me__content--table--row me__content--table--row--column'>
        <div className='me__content--table--row--orange'>
         <img
          alt='empathy map persona'
          src={props ? props.images.emoji1 : null}
          className='me__content--table--row--orange--icon'
         />
         <p>
          People have a desire to increase their knowledge about mental health.
         </p>
        </div>
        <div className='me__content--table--row--orange'>
         <img
          alt='empathy map persona'
          src={props ? props.images.emoji5 : null}
          className='me__content--table--row--orange--icon'
         />
         <p>
          People believe that society lacks in the education of mental health.
         </p>
        </div>
       </div>
      </td>
     </tr>
    </tbody>
   </table>
   <hr></hr>
   <div className='me'>
    <div className='me__content center'>
     <p className='me__content--full--quote center space'>
      {props ? props.synthesis.quote[0] : null}
     </p>
     <p className='me__content--desc center'>
      {props ? props.synthesis.quote[1] : null}
     </p>
    </div>
   </div>
   <hr></hr>
   <div className='me'>
    <div className='me__content'>
     <p className='me__content--title'>Personas</p>
    </div>
   </div>
   <div className='me__content--full'>
    <img
     alt='Cecilia Adams persona chart'
     src={props ? props.images.MEPersona1 : null}
     className='me__content--img'
    />
    <p className='me__content--desc' style={{ width: '20rem' }}>
     Cecilia is motivated to take matters into her own hands, gather the tools
     she needs, and apply them for her mental health wellness.
    </p>
   </div>
   <div className='me__content--full row-reverse'>
    <img
     alt='Mina Stewart persona chart'
     src={props ? props.images.MEPersona2 : null}
     className='me__content--img'
    />
    <p className='me__content--desc' style={{ width: '20rem' }}>
     Mina does not need the motivation to take control of her mental health. She
     loves therapy, but she likes being able to do the work independently.
    </p>
   </div>
   <div className='me__content--full'>
    <img
     alt='Richard Beal persona chart'
     src={props ? props.images.MEPersona3 : null}
     className='me__content--img'
    />
    <p className='me__content--desc' style={{ width: '20rem' }}>
     Richard does not trust mental health apps and does not mind doing his own
     research from credible sources.
    </p>
   </div>
  </Element>
 );
};

export default MESynthesis;
