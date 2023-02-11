import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { Posts as PostsComponent} from "src/components/Posts";

const inter = Inter({ subsets: ["latin"] });

const Posts = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
