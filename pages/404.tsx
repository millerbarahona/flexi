import React from 'react'
import styles from '../styles/404.module.css'

const Page404 = () => {
  return (
    <div className={styles.container}>
      <img src="/images/404/Grupo 2535.svg" className={styles.mancha}/>
      <img src="/images/404/Grupo 3453.svg" className={styles.character}/>
      <div className={styles.logoContainer}>
          <img src="/images/404/paste.jpg" className={styles.logo}/>
      </div>
      <div className={styles.flex}>
        <h1 className={styles.error}>ERROR <b>404</b></h1>
        <div className={styles.message}>
          <h3>¡Alguien abrió la puerta que no era!</h3>
        </div>
        <div>
          <p>No te preocupes, en este laboratorio la curiosidad no es pecado. Aquí tienes <br />la llave de la puerta principal.</p>
        </div>
        <div>
          <button>¡Sáquenme de aquí!</button>
        </div>
      </div>
    </div>
  )
}

export default Page404