import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Main } from 'src/components/main'
import { FooterLinks } from '@/components/FooterLinks'
import { Headline } from '@/components/Headline'
import { Img } from '@/components/Img'
import { Header } from '@/components/Header'
import { useConter } from '@/hooks/useConter'
import { useInputArray } from '@/hooks/useInputArra'
import { useBglightBlue } from '@/hooks/useBglightBlue'




const inter = Inter({ subsets: ['latin'] })


//--------------------home
export default function Home() {
  const {count, isShow, handleClick, handleDisplay} = useConter();
  const {text, array, handleChange, handleAdd } = useInputArray();
  useBglightBlue();


  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>       
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>
       {isShow ? "非表示" : "表示"}
      </button>
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
