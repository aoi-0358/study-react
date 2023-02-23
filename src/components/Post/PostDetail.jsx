import Head from "next/head";
import {CommentListByPostId  } from "@/components/Comment/CommentListByPostId ";
import { UserNameByUserId } from "@/components/User/UserNameByUserId";
import { useRouter } from "next/router";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const PostDetail = () => {
  const router = useRouter();
  const { data, user, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/posts${router.query.id}` : null
  );

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
        <UserNameByUserId id={data.userId} />

        <h1 className="text-3xl font-bold">{data?.title}</h1>
        <p className="text-gray-900">{data?.body}</p>

        <h2 className="text-lg font-bold mt-10">コメント一覧</h2>
        <div className="mt-2">
          <CommentListByPostId  id={data.id} />
        </div>
      </div>
    </>
  );
};
