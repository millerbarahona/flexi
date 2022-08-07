import React from 'react'
import styles from '../styles/loading.module.css'

const loading = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.logoContainer}>
          <img src="/images/404/Paste.jpg" className={styles.logo}/>
          hola
      </div>
      <div className={styles.character}>
        <img src="/images/loading/Grupo 2623.svg" alt="" />
        <img src="/images/loading/Grupo 3455.svg" /> 
      </div>
      
      <div className={styles.texts}>
        <h1>¡YA CASI SE SECA EL PISO!</h1>
        <p>Danos unos minutitos más, mientras el bichito del aseo termina de dejar bien pispo el laboratorio. <b>Tú sabes, primero muertos que mal trapeado.</b></p>
      </div>
    </div>
  )
}

export default loading
