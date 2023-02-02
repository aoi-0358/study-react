import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export const Headline = (props) => {
  return (
    <>
          <p> 
              アイテムの数は{props.children}個です
          </p>

          <button onClick={props.handleReduce}>減らす</button>
    </>
  )
}