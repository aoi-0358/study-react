import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

export function Header () {
  return(
    <>
     <header className={classes.header}>
      <Link href="/">
        <div className={classes.anchor}>Index</div>
      </Link>
      <Link  href="/about">
        <div className={classes.anchor}>about</div>
      </Link>   
     </header>   
    </>
  )
}