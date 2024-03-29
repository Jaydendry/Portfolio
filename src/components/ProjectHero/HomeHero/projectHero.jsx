import React from 'react'
import { DownButton, GradientCircle} from '../../Button/button'
import styles from './projectHero.module.scss'
import { useRef } from 'react'
import { Tag } from '../../Button/button'
import { projectData } from '../../../projectData'
import { useEffect } from 'react';

export default function ProjectHero(text) {
  const scrollDarkness = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // scrollDarkness.style.opacity = 1 - window.scrollY / 700;
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const currentProject = projectData.find((project) => project.title === text.projectTitle);
  console.log(currentProject.textList);
  return (
    <>
    <div className={styles.container} style={{backgroundImage: `url(${process.env.PUBLIC_URL + `/images/${text.projectTitle}/${text.heroImage}`})`}}>
    <div className={`${styles.container} ${styles.overlay}`} ref={scrollDarkness}></div>
    <h1 className={styles.bobble}>{text.headline}</h1>
    <div className={styles.projectBorder}>
        {currentProject &&
          <div className={styles.tagList}>
            {currentProject.tagList.map((tag,index) => (
              <Tag key={index} 
                    tagTitle={tag}
                    className={styles.tag}
              />
            ))
            }
          </div>
        }
    </div>

      <DownButton/>
    </div>
    <div className={styles.bottomLeftCirclePosition} style={{background: `${text.gradientCircleColour}`}}>
        <GradientCircle/>
      </div>
      <div className={styles.topRightCirclePosition} style={{background: `${text.gradientCircleColour}`}}>
        <GradientCircle/>
      </div>
    </>
  )
}