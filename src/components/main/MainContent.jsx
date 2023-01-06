import Image from 'next/image';
import styles from '../main/MainContent.module.css';
import { useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';


export function MainContent() {

  const Feature=[
    {FeatureTitle: "WEB Develop",icons:"/images/icons/website.png" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, a."},
    {FeatureTitle: "High Performance",icons:"/images/icons/diagram.png" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, a."},
    {FeatureTitle: "Excellent Technology",icons:"/images/icons/technology.png" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, a."},
    {FeatureTitle: "Great Maintenance",icons:"/images/icons/tools.png" ,description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, a."}
  ]



  return (
    <>
      <div className={styles.background}>
        <section className={styles.section1}>
          <div className={styles.content}>

            <Fade left duration={2000} delay={200}>
              <h1 className={styles.h1}>
                {/* <Image src="/images/icons/001-react.png" width={50} height={50} alt="react" className={styles.icon}></Image> */}
                Yuuki&apos;s World
                </h1>
              </Fade>

            <Fade bottom deration={2000} delay={500}>
              <Image src="/images/background/church.jpg" width={600} height={400} alt="church" className={styles.image}></Image>
            </Fade>

            <Fade rigth deration={2000} delay={500}>
              <div className={styles.textTile}>
                <h2 className={styles.h2_1}>My first Portifolio</h2>
                <p className={styles.p_1}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Repellendus quas, ad dolor maiores vitae, deserunt repudiandae 
                  nam nisi necessitatibus ipsam aspernatur fuga inventore amet eum 
                  voluptatum provident ipsa quod! Laborum.
                </p>
              </div>
            </Fade>

          </div>

        </section>

        <section className={styles.section2}>
          <div className={styles.content2}>

            <Fade rigth duration={2000} delay={200}>
              <h1 className={styles.h1}>Our service</h1>
            </Fade>
            <div className={styles.demo2}>
              <Fade top duration={2000} delay={200}>
                <Image src="/images/background/cold.jpg" width={600} height={400} alt="cold" className={styles.image2}></Image>
              </Fade>

              <Fade bottom duration={2000} delay={200}>
                <div className={styles.textTile2}>
                  <h2 className={styles.h2_2}>My first Portifolio</h2>
                  <p className={styles.p_2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Qui quasi esse voluptate possimus pariatur maxime, minima minus ullam, 
                    in nostrum, reiciendis perferendis consectetur sit eligendi? 
                    Esse repudiandae beatae fuga! Labore reiciendis excepturi doloribus pariatur 
                    dolore architecto laboriosam qui, et quaerat quibusdam ex sint iste libero 
                    repudiandae vero mollitia facilis aliquam.
                  </p>
                </div>
              </Fade>
            </div>

          </div>

        </section>

        <section className={styles.section3}>
          <div className={styles.content3}>

            <Fade rigth duration={2000} delay={200}>
              <h1 className={styles.h1_3}>Feature</h1>
            </Fade>

            <div className={styles.allFeature}>
              {Feature.map(item =>{
                return(
                  <Fade bottom duration={2000} delay={200}>
                  <div key={item.FeatureTitle} className={styles.innner_content}>
                      <Image src={item.icons} width={80} height={80} alt="feature picture" className={styles.image3}></Image>
                      <div className={styles.textTile3}>
                        <h2 className={styles.h2_3}>{item.FeatureTitle}</h2>
                        <p className={styles.p3}>{item.description}</p>
                      </div>
                  </div>
                  </Fade>
                );
              })}
            </div>

          </div>

        </section>

      </div>

    </>
  )
}
