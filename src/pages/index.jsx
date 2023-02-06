import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Header } from "@/components/Header";
import { Posts } from "@/components/Posts";

const inter = Inter({ subsets: ["latin"] });

//--------------------home
const Home = () => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </>
  );
};

export default Home;
