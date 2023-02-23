import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";
import { fetcher } from "src/utils/fetcher";
import { useRouter } from "next/router";
import { PostTitleByCommentId } from "../Post/PostTitleByCommentId";

export const CommentDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null,
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <div className="text-lg">
        {data.name} ({data.email})
      </div>
      <h1 className="text-3xl font-bold">{data.body}</h1>;
      <h2 className="text-lg font-bold mt-10">コメント一覧</h2>
      <div className="mt-2">
        <PostTitleByCommentId id={data.postId} />
      </div>
    </div>
  );
};
