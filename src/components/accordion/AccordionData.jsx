import React, { useState } from 'react'
import styles from '../accordion/Accordion.module.css'


export function AccordionData() {

    const Data =[
        {
            question:'どのような技術を使いましたか？',
            answer:'JavaScriptのReactを使用しました。'
        },
        {
            question:'学習したプログラミング言語は何ですか？',
            answer:'HTML、CSS、JavaScript、Pythonです。'
        },
        {
            question:'今後学習したい技術は何ですか？',
            answer:'PHP、Larabel、AWS、ネットワーク全般、サーバー全般'
        },
        {
            question:'コーヒーは好きですか？',
            answer:'大好きです。'
        },
        {
            question:'質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文',
            answer:'回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、'
        },
        {
            question:'質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文、質問・テスト長文',
            answer:'回答・テスト長文'
        },
        {
            question:'質問・テスト長文',
            answer:'回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、'
        },
        {
            question:'質問・テスト長文2',
            answer:'回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、回答・テスト長文、'
        },
    ]

    const [showInfo,setShowInfo] = useState(false);

    const handleClick = () =>{
        setShowInfo((prevState) => !prevState)
        console.log(handleClick)
    }

  return (
    <>
        <div className={styles.faqParents}>
            {Data.map(item =>{
                return(
                    <div key={item.question} className={styles.child}>

                        <div className={styles.grandchild}>

                            <div className={styles.questionParents} onClick={(e)=>handleClick(e)}>
                                <h2 className={styles.question}>
                                    {item.question} 
                                </h2>
                                <span className={styles.span}>+</span>

                            </div>

                            <div className={styles.answerParents}>
                                <p className={styles.answer}>
                                    {item.answer}
                                </p>
                            </div>

                        </div>

                    </div>
                )
            })}
        </div>
    </>
  )
}
