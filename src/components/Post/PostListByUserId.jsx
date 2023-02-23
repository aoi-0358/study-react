import { API_URL } from "@/utils/const";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";

const inter = Inter({ subsets: ["latin"] });

export const PostListByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/users/${props.id}/posts` : null
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
      <ul className="space-y-4">
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <div className="block group">
                  <h1 className="text-2xl font-bold group-hover:text-blue-500">
                    {post.title}
                  </h1>
                  <p className="text-lg text-gray-500 group-hover:text-blue-400">
                    {post.body}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
