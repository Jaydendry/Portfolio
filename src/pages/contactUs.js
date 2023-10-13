import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import Skills from '../components/SkillCard/skill'
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation'
import { Heading } from '../components/textBox/text'
import HomeHero from '../components/HomePageHero/HomeHero/homehero';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  // const [isHovering, setIsHovering] = useState(false)
  // onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}
  return (
    <div>
        <HomeHero headline="Work with Us"/>
        <Heading heading="Work With Us" backgroundColor="var(--background-colour)" colorFlat="var(--text-colour)"/>
    </div>
  )
}