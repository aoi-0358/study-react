import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Main } from 'src/components/main'
import { FooterLinks } from '@/components/FooterLinks'
import { Headline } from '@/components/Headline'
import { Img } from '@/components/Img'
import { Header } from '@/components/Header'
import { useState,useCallback } from 'react'


const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    inter: "Docs", 
    p: "Find in-depth information about Next.js features and&nbsp;API."
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    inter: "Learn", 
    p: "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    inter: "Templates", 
    p: "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    inter: "Deploy",
    p: "Instantly deploy your Next.js site to a Vercel"
  },
];

const inter = Inter({ subsets: ['latin'] })

export default function About(props) {
  const {count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd} = props;

  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
   setItems((prevItems) => {
     return prevItems.slice(0, prevItems.length -1);
   });
  }, []);

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
          <Headline page={props.page} handleReduce={handleReduce}>  
            <code className={styles.code}>{items. length}</code>
          </Headline>
          <Img />
        </div>
          <Main />
          <FooterLinks items={items} />
      </main> 
    </>
  )
}
