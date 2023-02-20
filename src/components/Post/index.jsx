import Head from "next/head";
import { Inter } from "@next/font/google";
import { usePost } from "src/hooks/usePost";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "../User/UserByUserId";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const Post = () => {
  const router = useRouter();
  const { data, user, error, isLoading } = usePost(router.query.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        <Head>
          <title>{data?.title}</title>
        </Head>
        <UserByUserId id={data.userId} />

        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <p className="text-gray-900">{data?.body}</p>

        <h2 className="text-lg font-bold mt-10">コメント一覧</h2>
        <div className="mt-2">
          <CommentsByPostId id={data.id} />
        </div>
      </div>
    </>
  );
};
