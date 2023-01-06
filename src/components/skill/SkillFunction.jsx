import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {SkillData} from './SkillData'

export function SkillFunction({slide}) {
  return (
    <>
        <div>
            {SkillData.map((slide, index) =>{
                return(
                    <Image key={slide.image} src={slide.image} width={600} height={400} alt='image.slide'></Image>
                )
            })}
        </div>
    </>
  )
}
