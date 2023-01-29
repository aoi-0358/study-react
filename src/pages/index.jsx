import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Main } from 'src/components/main'
import { FooterLinks } from '@/components/FooterLinks'
import { Headline } from '@/components/Headline'
import { Img } from '@/components/Img'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header />

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
