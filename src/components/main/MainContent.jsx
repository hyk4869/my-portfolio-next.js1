import Image from 'next/image';
import styles from '../main/MainContent.module.css';

export function MainContent() {

  return (
    <>
      <div className={styles.background}>
        <section className={styles.section1}>
          <div className={styles.content}>
            <h1 className={styles.h1}>Yuuki's World</h1>
            
            <Image src="/images/background/church.jpg" width={600} height={400} alt="church" className={styles.image}></Image>
            
            <div className={styles.textTile}>
              <h2 className={styles.h2}>My first Portifolio</h2>
              <p className={styles.p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Repellendus quas, ad dolor maiores vitae, deserunt repudiandae 
                nam nisi necessitatibus ipsam aspernatur fuga inventore amet eum 
                voluptatum provident ipsa quod! Laborum.
              </p>
            </div>

          </div>

        </section>

        <section className={styles.section2}>
          <div className={styles.content}>
            <h1 className={styles.h1}>Our service</h1>
            
            <Image src="/images/background/cold.jpg" width={600} height={400} alt="church" className={styles.image2}></Image>
            
            <div className={styles.textTile2}>
              <h2 className={styles.h2}>My first Portifolio</h2>
              <p className={styles.p}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Qui quasi esse voluptate possimus pariatur maxime, minima minus ullam, 
                in nostrum, reiciendis perferendis consectetur sit eligendi? 
                Esse repudiandae beatae fuga! Labore reiciendis excepturi doloribus pariatur 
                dolore architecto laboriosam qui, et quaerat quibusdam ex sint iste libero 
                repudiandae vero mollitia facilis aliquam.
              </p>
            </div>

          </div>

        </section>

        <section className={styles.section3}>
          <div className={styles.content}>
            <h1 className={styles.h1}>Feature</h1>
            
            <Image src="/images/background/ball.jpg" width={600} height={400} alt="church" className={styles.image3}></Image>
            
            <div className={styles.textTile3}>
              <h2 className={styles.h2}>My first Portifolio</h2>
              <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Repellendus fuga quae vel et numquam molestias iusto, sunt voluptatum! Natus, nostrum. 
              Numquam consectetur, vitae mollitia ullam perspiciatis expedita quos incidunt optio?
              </p>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

