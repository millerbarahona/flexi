import React from 'react'
import styles from '../styles/Part3.module.css'
import { CardPart2 } from './CardPart3'

export const Part3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bottle}>
        <img src="/images/Grupo 2118.svg" alt="" />
      </div>
      <div className={styles.float}>
        <img src="/images/Grupo 2223.svg" alt="" />
      </div>
      <div>
        <h3>Nuestro cuartico de San Alejo</h3>
      </div>
      <div className={styles.grid}>
        <div >
          <div className={styles.category}>
            <h2>CATEGORIA</h2>
          </div>
          <div className={styles.column}>
            <CardPart2 />
            <CardPart2 />
            <CardPart2 />
          </div>
        </div>
        <div >
        <div className={styles.category}>
            <h2>CATEGORIA</h2>
          </div>
          <div className={styles.column}>
            <CardPart2 />
            <CardPart2 />
            <CardPart2 />
          </div>
        </div>
        <div >
        <div className={styles.category}>
            <h2>CATEGORIA</h2>
          </div>
          <div className={styles.column}>
            <CardPart2 />
            <CardPart2 />
            <CardPart2 />
          </div>
        </div>
      </div>
    </div>
  )
}
