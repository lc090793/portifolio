import React from 'react';

import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faGithubSquare,faLinkedinIn,faInstagram,faYoutube,faDribbble} from '@fortawesome/free-brands-svg-icons'
import Reveal from '../Reveal';
function Social() {
  return <div className='social'>

    <div className='social__container'>
        <Reveal component={<div className='headline'>Want to see more?</div>}/>
        <Reveal component={<div className='social_lets_connect'>Let’s talk with me  at firman.praa@gmail.com</div>}/>
        <div className='social_icons'>
        <Reveal delay=".1" component={<FontAwesomeIcon icon={faBehanceSquare} />}/>
        <Reveal delay=".2"  component={<FontAwesomeIcon icon={faGithubSquare} />}/>
        <Reveal delay=".3"  component={<FontAwesomeIcon icon={faLinkedinIn} />}/>
        <Reveal delay=".4"  component={<FontAwesomeIcon icon={faInstagram} />}/>
        <Reveal delay=".5"  component={<FontAwesomeIcon icon={faYoutube} />}/>
        <Reveal delay=".6"  component={<FontAwesomeIcon icon={faDribbble} />}/>
        </div>
    </div>

  </div>;
}

export default Social;