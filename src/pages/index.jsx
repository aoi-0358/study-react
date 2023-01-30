import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Main } from 'src/components/main'
import { FooterLinks } from '@/components/FooterLinks'
import { Headline } from '@/components/Headline'
import { Img } from '@/components/Img'
import { Header } from '@/components/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
    setCount((count) => count + 1);
    }
   }, [count]);

   const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
   }, []);

   const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("五文字以内");
      return;
    }
    setText(e.target.value.trim())
  }, []);

   useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
     };
  }, [count]);

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
