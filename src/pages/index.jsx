import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Main } from 'src/components/main'
import { FooterLinks } from '@/components/FooterLinks'
import { Headline } from '@/components/Headline'
import { Img } from '@/components/Img'
import { Header } from '@/components/Header'
import { useCallback, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const foo = 1;
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href);
  //   e.preventDefault();  
  //   alert(foo);
  //  }, []);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>       
      <Header />
      {/* <a href="/about" onClick={handleClick}>
        ボタン
      </a> */}
      <main className={styles.main}>
        <div className={styles.description}>
          <Headline 
            page="index">
            <code className={styles.code}>index page</code>
          </Headline>
          <Img />   
        </div>
          <Main />
          <FooterLinks />
      </main> 
    </>
  )
}
