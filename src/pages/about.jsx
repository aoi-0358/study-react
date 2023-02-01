import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Main } from 'src/components/main'
import { FooterLinks } from '@/components/FooterLinks'
import { Headline } from '@/components/Headline'
import { Img } from '@/components/Img'
import { Header } from '@/components/Header'
import { useState, useEffect, useCallback } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function About(props) {
  const {count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd} = props; 

  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      
      <input 
      type="text"  
      value={text} 
      onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return(
            <li key={item}>{item}</li>
          )
        }) }
      </ul>

      <main className={styles.main}>
        <div className={styles.description}>
          <Headline page="about">
            <code className={styles.code}>about page</code>
          </Headline>
          <Img />
        </div>
          <Main />
          <FooterLinks />
      </main> 
    </>
  )
}
