import React from 'react'
import styles from '../styles/Part2.module.css'
import { CardPart2 } from './CardPart2'

export const Part2 = () => {
  return (
    <div className={styles.container}>
      <img src="/images/Grupo 2103.svg" className={styles.float}/>
      <div className={styles.containerFlex}>
        <h1>Lo Que Más Se Vendió</h1>
        <h3>Bueno, no vendimos nada…Pero fueron esas <b>fórmulas top</b> que le <br />arreglaron el día a más de uno</h3>
        <div className={styles.gridContainer}>
          <CardPart2/>
          <CardPart2/>
          <CardPart2/>
          <CardPart2/>
        </div>
      </div>
    </div>
  )
}
