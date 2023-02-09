import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { usePosts } from "src/hooks/usePosts";

const inter = Inter({ subsets: ["latin"] });

//--------------------home
export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <>
      <ol className={styles.wrapper}>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ol>
    </>
  );
};