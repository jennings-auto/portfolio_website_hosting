import React from 'react';
import {skills, experiences, educations} from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom";


// import { CTA } from "../components/CTA";

// **********************************************
// EDIT CONSTANTS/INDEX.JS to change the contents
// **********************************************

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'> Hello! I'm <span className='blue-gradient_text font-semibold drop-shadow'> Sanimar Singh</span></h1>

      <div>
        <p className='mt-5 flex flex-col gap-3 text-slate-500 '>
          Upcoming Data Analyst at "MMJS Dataphi", with a keen interest in the Data as well as the AI/ML Domain!
          I have always been interested in the power of "Data" and the various insights you can draw out from it to solve real world complex problems.

        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill)=>(
            <div className='block-container w-20 h-20' >
              <div className='btn-back rounded-xl '/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt= {skill.name} className='w-1/2 h-1/2 object-contain' />
              </div>

            </div>
          ))}
        </div>
      </div>
      
      <div className='py-16'>
          <h3 className='subhead-text' > Work experience</h3>
          <div>
            <p className='mt-5 flex flex-col gap-3 text-slate-500 '>
              I will be graduating in 2025 and have bagged the role of Data Analyst at MMJS Dataphi in the on campus Placements.
            </p>
          </div>

          <div className='mt-12- flex' >
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                key = {experience.company_name}
                date = {experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img src={experience.icon}
                       alt = {experience.company_name}
                       className='w-[60%] h-[60%] object-contain' />
                </div>}
                iconStyle={{
                  background: experience.iconBg
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>{experience.company_name}</p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm '>{point}</li>
                    ))}
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>

      <div className='py-16'>
          <h3 className='subhead-text' > Education </h3>
          <div>
            <p className='mt-5 flex flex-col gap-3 text-slate-500 '>
              My highest education as of now is Bachelors in Computer Science and Engineering specialization in Data Science.
            </p>
          </div>

          <div className='mt-12- flex' >
            <VerticalTimeline>
              {educations.map((education) => (
                <VerticalTimelineElement
                key = {education.company_name}
                date = {education.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img src={education.icon}
                       alt = {education.company_name}
                       className='w-[60%] h-[60%] object-contain' />
                </div>}
                iconStyle={{
                  background: education.iconBg
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: education.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>{education.title}</h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>{education.company_name}</p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {education.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm '>{point}</li>
                    ))}
                  </ul>

                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>
    
      

      <hr className='border-slate-200 ' />

      <section className='cta'>
      <p className='cta-text'>
        Want to analyze something? <br className='sm:block hidden' />
        Let’s do it together!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>

    </section>
  )
}

export default About