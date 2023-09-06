import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation'
import { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';
import Projects from './dynamicProjects';
import ProjectGrid from '../components/ProjectGrid/projectGrid';

export default function ProjectPage() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <Navigation/>
        <HomeHero headline="Projects"/>
        <Heading heading="PROJECTS" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
        <ProjectGrid/>
        <Footer textColor='var(--text-colour)' />
    </div>
  )
}