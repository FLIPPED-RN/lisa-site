'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/Header";
import './../../styles/font.css';
import Form from "../../components/Form";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Header />
      </header>

      <main>
        <section className={styles.heading}>
          <div className={styles.heading__h}>
            <h1>Л.И.С.А</h1>
            <Image
              src={'/left-icon.svg'}
              width={287}
              height={287}
              alt=""
            />
          </div>
          <div className={styles.heading__b}>
            <Image
              src={'/heading-swipe.svg'}
              width={1800}
              height={100}
              alt=""
              className={styles.no__drag}
            />
          </div>
        </section>

        <section className={styles.grid__qr}>
          <div>
            <Image
              src={'/grid-qr.svg'}
              width={920}
              height={550}
              alt=""
              className={styles.no__drag}
            />
            <a href="#">УЗНАТЬ БОЛЬШЕ</a>
            <p>локальная индивидуальная система администрирования</p>
          </div>
          <div>
            <Image
              src={'/image-house.svg'}
              width={840}
              height={537}
              alt=""
              className={styles.roundedImage}
            />
          </div>
        </section>

        <section className={styles.details}>
          <div>
            <div className={styles.details__h}>
              <h1>детали</h1>
              <Image
                src={'/hvost.svg'}
                width={270}
                height={270}
                alt=""
                className={styles.details__image}
              />
            </div>
            <div className={styles.details__grid}>
              <Image
                src={'/details-kvar.svg'}
                width={800}
                height={590}
                alt=""
              />
              <div className={styles.grid__block}>
                <p className={styles.block__p}>Вся аналитика больших данных в невероятно компактном решении</p>
                <div className={styles.block__grid}>
                  <Image
                    src={'/details-grid.svg'}
                    width={920}
                    height={280}
                    alt=""
                    className={styles.no__drag}
                  />
                  <p className={styles.overlay__text}>Управляй ресурсами эффективно 
                  с нашей системой умного мониторинга. Прозрачная аналитика в каждом доме.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.application}>
          <div>
            <div className={styles.application__h}>
              <h1>оставить заявку</h1>
              <Image
                src={'/vector.svg'}
                width={350}
                height={240}
                alt=""
                className={styles.application__image}
              />
            </div>
            <div className={styles.application__block}>
              <div className={styles.application__form}>
                <Form />
              </div>
              <div className={styles.application__grid}>
                <div>

                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
