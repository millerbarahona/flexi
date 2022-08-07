import React from 'react'
import styles from '../styles/Part1.module.css'

export const Part1 = () => {
  return (
    <div className={styles.container}>
      <img src="/images/Brazo.svg" className={styles.brazo}/>
      <img src="/images/Grupo 3327.svg" className={styles.brazo1}/>
      <div className={styles.containerflex}>
        <h1>La fórmula de la semana</h1>
        <p>Tú tranqui que ya fue analizada, testeada y aprobada</p>
        <div className={styles.gridcontainer}>
          <div className={styles.tecnologia}>Tecnología</div>
          <div className={styles.divGris}>
            Hola
          </div>
          <div className={styles.texts}>
           <div className={styles.flexArtc}>
            <h2>Lorem ipsum dolor sit amet,<br />consectetur adipiscing</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br />nonummy nibh euismod tinciLorem ipsum dolor sit amet, <br />consectetuer adipiscing elit.</p>
            <button>¡Leer Ahora!</button> 
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
