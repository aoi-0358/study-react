import Head from "next/head";
import { Inter } from "@next/font/google";
import { usePost } from "src/hooks/usePost";


const inter = Inter({ subsets: ["latin"] });

//--------------------home
export const Post = () => {
  const { post, user, error, isLoading } = usePost();

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
        <title>{post?.title}</title>
      </Head>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
        {user?.name ? <div>Created by {user.name}</div> : null}
      </div>
    </>
  );
};
