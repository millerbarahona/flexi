import React from 'react'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export const Header = () => {
  return (
    <div>
    <div className={styles.container}>
      <div className={styles.floatBlog}>
        <h1>BLOG</h1>
      </div>
      <div className={styles.flex}>
        <img src="/images/Grupo 2000.svg" alt="logo" className={styles.logo} />
        <img src="/images/Grupo 1969.svg" alt="logo" className={styles.nuestra} />
        <img src="/images/Grupo 2004.svg" alt="logo" className={styles.aydiquesi} />
        <div className={styles.title}>
          <p>ADVERTENCIA: SOLO PARA CURIOSOS</p>
        </div>
        <h3>Las buenas historias tienen unos ingredientes secretos.</h3>
        <p>Un poco de magia, una pizca de amor, ese toque de la necesaria realidad y esa llama que solo se <br /> enciende cuando nos visitas (*GRRRR)</p>
        <button><h3>¿Quieres magia en tu correo?</h3></button>
        <img src="/images/Grupo 1961.svg" className={styles.flecha}/>
      </div>
    </div>
    <div className={styles.line}>
    </div>
    </div>
  )
}
