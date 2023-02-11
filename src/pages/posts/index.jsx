import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { Posts } from "src/components/Posts";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
