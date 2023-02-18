import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

const inter = Inter({ subsets: ["latin"] });

export const Posts = () => {
  const router = useRouter();
  const { data, error, isLoading, isEmpty,  } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

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
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <div>{post.title}</div>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
};
