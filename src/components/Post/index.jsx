import Head from "next/head";
import { Inter } from "@next/font/google";
import { usePost } from "src/hooks/usePost";
import { CommentsByPostsId } from "src/components/Comments/CommentsByPostsId";
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
        <h1>{data?.title}</h1>
        <p>{data?.body}</p>
        <UserByUserId id={data.userId} />
        <CommentsByPostsId id={data.id} />
      </div>
    </>
  );
};
