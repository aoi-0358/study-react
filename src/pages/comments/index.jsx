import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { CommentComponent } from "@/components/Comments";
import { SWRConfig } from "swr";
import { API_URL } from "@/utils/const";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;

  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 10,
  };
};

const Comments = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
