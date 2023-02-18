import { Inter } from "@next/font/google";
import Link from "next/link";
import { usePosts } from "@/hooks/useFetchArray";
usePosts

const inter = Inter({ subsets: ["latin"] });

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
      <ol>
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
