import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { Posts as PostsComponent} from "src/components/Posts";

const inter = Inter({ subsets: ["latin"] });

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
