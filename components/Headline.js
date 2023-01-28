import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export function Headline(props) {
  return (
    <>
          <p>
              {props.page}.js started by editing&nbsp;
              {props.children}
          </p>
    </>
  )
}