import { Inter } from "@next/font/google";
import { Header } from "src/components/Header";
import { CommentComponent } from "@/components/Comments";
import { SWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentData = await comments.json();
  const paths = commentData.map((comment) => {
    params: {
      id: comment.id.toStrings();
    }
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments${id}`;

  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();
  

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentsId = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Header />
      <SWRConfig value={{ fallback }}>
        <CommentComponent />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
