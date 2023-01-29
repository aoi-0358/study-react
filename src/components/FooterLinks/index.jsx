import { style } from '@material-ui/system';
import { Inter } from '@next/font/google'
import classes from './FooterLinks.module.css';


const inter = Inter({ subsets: ['latin'] })

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

export function FooterLinks () {
  return (
    <>
        <div className={classes.grid}>
          
        {ITEMS.map(item => {
           return(
            <a key={item.href} href={item.href} className={classes.card} 
            target="_blank" 
            rel="noopener noreferrer"
            >
            <h2 className={inter.className}>
              {item.inter}<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {item.p}
            </p>
            </a>
           )
        })}

      </div>
    </>
  )
}
