// import { render } from '@react-three/fiber'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import {arrow} from '../assets/icons'

// const InfoBox =({text, link, btnText}) =>{
//     <div className='InfoBox'>
//         <p className='font-medium sm:text-xl text-center'> {text} </p>
//         <Link to={link} className='neo-brutalism-white neo-btn'>
//             {btnText}
//             <img src = {arrow} className='w-4 h-4 object-contain' />
//         </Link>
//     </div>
// }

// const renderContent = {
//     1: (
//         <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
//         Hi, I am <span className='font-semibold'> Sanimar Singh</span> 👋 
//         <br/>
//         A Data Analyst!
//         </h1>
//     ),
//     2: (
//         <InfoBox 
//         text = "Upcoming Data Analyst at MMJS Dataphi"
//         link = "/about"
//         btnText = 'Learn More'
//         />
//     ),
//     3: (
//         <h1> 3 </h1>
//     ),
//     4: (
//         <h1> 4 </h1>
//     ),
// }


// const HomeInfo = ({currentStage}) => {
//   return renderContent[currentStage] || null;
// }


// export default HomeInfo

import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Sanimar</span>
        👋
        <br />
        An aspiring Data Scientist!
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Upcoming Data Analyst at "MMJS Dataphi".
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          I have done multiple projects over the years. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Have a Look
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Did you like what I built? <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;