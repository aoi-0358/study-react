import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { CommentComponent } from "@/components/Comments";

const inter = Inter({ subsets: ["latin"] });

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentComponent />
    </div>
  );
};

export default Comments;
