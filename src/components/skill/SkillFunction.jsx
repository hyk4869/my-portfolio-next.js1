import Image from 'next/image'
import React, { useState } from 'react'
import {SkillData} from './SkillData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import styles from '../skill/Skill.module.css'



export function SkillFunction({slide}) {
    const [current, setCurrent] = useState(0)
    const length = slide.length
    

    const nextSlide=() =>{
        setCurrent(current === length -1 ? 0 : current +1)
    }

    const prevSlide=() =>{
        setCurrent(current === 0 ? length -1 : current -1)
    }


    return (
        <>
        <section className={styles.slider}>
            <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide}/>
            <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide}/>

            <div className={styles.imageParents}>
                {SkillData.map((slide, index) =>{
                    return(
                        <div className={styles.contentParents} key={slide.image}>
                            <div className={index === current? styles.slideActive : styles.slide}>
                                {index === current && (<Image src={slide.image} className={styles.imageIcons}
                                width={200} height={200} alt='image.slide'></Image>)}
                            </div>
                            <div className={styles.divDescription}>
                                {index === current && ((<h1 className={styles.title}>{slide.title}</h1>))}
                                {index === current && ((<p className={styles.p}>{slide.description}</p>))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
    )
}



