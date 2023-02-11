import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

const Index = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1 className={styles.h1}>Next.jsで学ぶReact講座</h1>
      <p>JSONPlaceholderのAPIを色々叩いてみるよ！</p>
    </div>
  );
};

export default Index;
