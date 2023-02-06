import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Main } from "src/components/main";
import { FooterLinks } from "@/components/FooterLinks";
import { Headline } from "@/components/Headline";
import { Img } from "@/components/Img";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

//--------------------home
const Home = (props) => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {props.isShow ? <h1>{props.dobleCount}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>
      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <main className={styles.main}>
        <div className={styles.description}>
          <Headline page="index">
            <code className={styles.code}>index page</code>
          </Headline>
          <Img />
        </div>
        <Main />
        <FooterLinks />
      </main>
    </>
  );
};

export default Home;
