'use client';

import { FaBriefcase, FaHome, FaMobileAlt, FaSchool } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.scss';

interface Milestone {
  title: string;
  location: string;
  icon: any;
  date: string;
  stack: string;
  description: string;
}

export default function Timeline() {
  const milestones: Milestone[] = [
    {
      title: 'Technical Consultant',
      location: 'TarkaLabs',
      icon: <FaBriefcase />,
      date: '2022 - Present',
      stack: 'Angular, React, Nest, MongoDB, Azure',
      description: `Company policies aligning perfectly with my principles, offered me a perfect blend of challenge and learning.
      Created a collaborative system for editing and managing rich text documents. Another colossal undertaking involved refining a 
      comprehensive project management solution, encompassing everything from Gantt views, costing, planning, execution, and monitoring.`
    },
    {
      title: 'Senior Software Engineer',
      location: 'RailsFactory',
      icon: <FaBriefcase />,
      date: '2021 - 2022',
      stack: 'React, Ruby on Rails, MySQL, Dokku',
      description: `Working with a dedicated Ruby on Rails company brought both width and depth in knowledge of my favourite framwework. 
        Played with rails companions like rspec, capybara, react with webpacker, active admin, sendgrid, etc.`
    },
    {
      title: 'Software Engineer',
      location: 'Mindfire Solutions',
      icon: <FaBriefcase />,
      date: '2019 - 2021',
      stack: 'React, Ruby on Rails, MySQL, MongoDB, Python, DataStudio',
      description: `Started my jouney into corporate world. The elegance of ruby with the discipline that comes with rails, caught my attention.
      Created the next gen portal for a leading influencer management and marketing analytics firm. 
      Along with rails I gained exposure into python, opencv, setiment analysis, mongo, GCP, cloud vision and autoML.`
    },
    {
      title: 'Mobile App Developer',
      location: 'LocalWire',
      icon: <FaMobileAlt />,
      date: '2018 - 2019',
      stack: 'Flutter, Wordpress',
      description: `Started as an intern but took over the development and maintainance of a hyperlocal news portal. 
        The website was running on wordpress and I exposed some APIs from there to power the flutter application I developed.
        Apart from technical side of things, I also got the taste of hustle behind running a startup.`
    },
    {
      title: 'Graduated',
      location: 'Silicon Institue of Technology',
      icon: <FaSchool />,
      date: '2015 - 2019',
      stack: 'Computer Science and Engineering',
      description: `Unraveled journey from processors to visuals on screen. Broadened my knowledge and chose web development as my forte. 
      Enjoyed building many IOT & Web projects, mentoring juniors and the thrill of hackathons.`
    }
  ];

  return (
    <VerticalTimeline layout="1-column">
      {milestones.map(milestone => (
        <VerticalTimelineElement
          key={milestone.title}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgba(255, 255, 255, 0.5)', color: 'rgb(2, 90, 78)' }}
          contentArrowStyle={{ borderRight: '8px solid rgba(255, 255, 255, 0.5)' }}
          date={milestone.date}
          iconStyle={{ background: 'rgb(2, 90, 78)', color: '#fff' }}
          icon={milestone.icon}>
          <h3 className="vertical-timeline-element-title title font-acorn text-primary">{milestone.title}</h3>
          <h5 className="vertical-timeline-element-subtitle location font-acorn text-secondary">
            {milestone.location}
          </h5>
          <p className="stack lead ">{milestone.stack}</p>
          <p className="mb-3 description">{milestone.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
