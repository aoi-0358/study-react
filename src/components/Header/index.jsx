import Link from "next/link";
import classes from "src/components/Header/Header.module.css";
import { useEffect } from "react";

export function Header () {
  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
     };
  }, []);
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